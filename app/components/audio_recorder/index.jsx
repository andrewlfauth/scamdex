import { useCallback, useEffect, useRef, useState } from 'react'
import { useTransition } from '@remix-run/react'

import RecordButton from '../audio_recorder/RecordButton'
import StopRecordingButton from '../audio_recorder/StopRecordingButton'
import ManageRecording from '../audio_recorder/ManageRecording'

function Index() {
  const transition = useTransition()
  const [permissionDenied, setPermissionDenied] = useState(false)
  const [chunks, setChunks] = useState([])
  const [state, setState] = useState('')
  const [recordingURL, setRecordingURL] = useState('')
  const [base64, setBase64] = useState('')

  const recorderRef = useRef()

  const startRecording = useCallback(async () => {
    let stream = await navigator.mediaDevices
      .getUserMedia({ audio: true })
      .catch((x) => setPermissionDenied(true))

    recorderRef.current = new MediaRecorder(stream)

    recorderRef.current.ondataavailable = (e) => {
      setChunks((old) => [...old, e.data])
    }

    recorderRef.current.start(1000)
  }, [recorderRef])

  useEffect(() => {
    if (state === 'recording') {
      startRecording()
    }

    if (state === 'stopped') {
      recorderRef.current.stop()
      let blob = new Blob(chunks)

      const reader = new window.FileReader()
      reader.readAsDataURL(blob)
      reader.onloadend = () => {
        setBase64(reader.result)
      }

      let audioUrl = URL.createObjectURL(blob)
      setRecordingURL(audioUrl)
    }
  }, [state, recorderRef, startRecording])

  useEffect(() => {
    if (transition.state === 'submitting') {
      setBase64('')
      setRecordingURL('')
      setChunks([])
      setState('')
    }
  }, [transition])

  return permissionDenied ? null : (
    <div className='w-full mt-2'>
      <input type='hidden' name='audio' value={base64} />
      <span className='block mb-2 text-sm text-type-secondary'>
        Record sound bite
      </span>
      <div className='flex items-center py-2 pl-4'>
        {state === 'recording' && (
          <StopRecordingButton
            stopRecording={() => setTimeout(() => setState('stopped'), 500)}
            disabled={state !== 'recording'}
          />
        )}
        {!state && !recordingURL && (
          <RecordButton
            startRecording={() => setState('recording')}
            disabled={state === 'recording}'}
          />
        )}
        {state === 'done' && <div>DONE</div>}
        {recordingURL && (
          <ManageRecording
            src={recordingURL}
            deleteRecording={() => {
              setRecordingURL('')
              setChunks([])
              setState('')
            }}
          />
        )}
      </div>
    </div>
  )
}

export default Index
