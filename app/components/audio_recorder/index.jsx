import { useCallback, useEffect, useRef, useState } from 'react'

import RecordButton from '../audio_recorder/RecordButton'
import StopRecordingButton from '../audio_recorder/StopRecordingButton'
import ManageRecording from '../audio_recorder/ManageRecording'
import { BsFillBookmarkHeartFill } from 'react-icons/bs'

function Index() {
  const [permissionDenied, setPermissionDenied] = useState(false)
  const [chunks, setChunks] = useState([])
  const [state, setState] = useState('')
  const [recordingURL, setRecordingURL] = useState('')
  const [a, setA] = useState('')

  const recorderRef = useRef()
  const base64Ref = useRef()

  const test = async () => {
    var fd = new FormData()
    fd.append()
    await fetch('https://api.cloudinary.com/v1_1/dpnkrz8c8/upload', {
      method: 'post',
    })
  }
  // useEffect(() => {
  //   if (base64Ref.current) {
  //     console.log(base64Ref.current)
  //   }
  // }, [base64Ref.current])

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
        base64Ref.current = reader.result
        setA('OPPP')
      }

      let audioUrl = URL.createObjectURL(blob)
      setRecordingURL(audioUrl)
    }
  }, [state, recorderRef, startRecording])

  return permissionDenied ? null : (
    <div className='w-full mt-2'>
      <input type='hidden' name='audio' value={base64Ref.current} />
      <span className='block mb-2 text-sm text-type-secondary'>
        Record sound bite for Edna
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
