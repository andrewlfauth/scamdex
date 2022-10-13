import { useCallback, useEffect, useRef, useState } from 'react'

function Index() {
  const [permissionDenied, setPermissionDenied] = useState(false)
  const [chunks, setChunks] = useState([])
  const [state, setState] = useState('')
  const [recordingURL, setRecordingURL] = useState('')
  let recorderRef = useRef

  const startRecording = useCallback(async () => {
    let stream = await navigator.mediaDevices
      .getUserMedia({ audio: true })
      .catch((x) => setPermissionDenied(true))

    recorderRef.current = new MediaRecorder(stream)

    recorderRef.current.ondataavailable = (e) => {
      setChunks((old) => [...old, e.data])
      console.log(e.data)
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
      let audioUrl = URL.createObjectURL(blob)
      setRecordingURL(audioUrl)
    }
  }, [state, recorderRef, startRecording])

  return permissionDenied ? (
    <div>Please Allow Permissions to Record</div>
  ) : (
    <div>
      <div>Audio Recorder</div>
      <button
        onClick={() => setState('recording')}
        disabled={state === 'recording'}
      >
        RECORD
      </button>
      <button
        onClick={() => setTimeout(() => setState('stopped'), 500)}
        disabled={state !== 'recording'}
      >
        STOP
      </button>
      <button
        onClick={() => {
          setRecordingURL('')
          setChunks([])
        }}
      >
        Delete
      </button>
      {recordingURL && <audio src={recordingURL} controls='controls' />}
    </div>
  )
}

export default Index
