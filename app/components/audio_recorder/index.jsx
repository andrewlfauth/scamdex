import { useEffect, useRef, useState } from 'react'

function Index() {
  const [isRecording, setIsRecording] = useState(false)
  const [permission, setPermission] = useState(false)
  const [chunks, setChunks] = useState([])
  const [state, setState] = useState('')
  const [blob, setBlob] = useState('')

  useEffect(() => {
    async function a() {
      let stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      let recorder = new MediaRecorder(stream)
      recorder.ondataavailable = (e) => {
        setChunks((old) => [...old, e.data])
        console.log(e.data)
      }
      recorder.start(1000)
      setTimeout(() => {
        recorder.stop()
        setState('stop')
      }, 3000)
    }
    a()
  }, [])

  useEffect(() => {
    if (state === 'stop') {
      let a = new Blob(chunks)
      let audioUrl = URL.createObjectURL(a)
      console.log(audioUrl)
      setBlob(audioUrl)
      // setBlob((old) => new Blob(chunks))
    }
  }, [chunks, state])

  return (
    <div>
      <div>Audio Recorder</div>
      {JSON.stringify(chunks)}
      <button onClick={() => setIsRecording(true)} disabled={isRecording}>
        RECORD
      </button>
      <button onClick={() => setIsRecording(false)} disabled={!isRecording}>
        STOP
      </button>
      {blob && <audio src={blob} controls='controls' />}
    </div>
  )
}

export default Index
