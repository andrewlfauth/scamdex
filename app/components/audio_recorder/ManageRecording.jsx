import { useRef, useEffect, useState } from 'react'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { MdDone, MdOutlineClear } from 'react-icons/md'

function ManageRecording({ src, deleteRecording }) {
  const audioRef = useRef()
  const [playing, setPlaying] = useState(false)
  const [done, setDone] = useState(false)

  const endPlaying = () => {
    setPlaying(false)
  }

  const playAudio = () => {
    audioRef.current.play()
    setPlaying(true)
  }

  useEffect(() => {
    let copy = audioRef.current
    audioRef.current.addEventListener('ended', endPlaying)

    return () => copy.removeEventListener('ended', endPlaying)
  }, [audioRef])

  return (
    <div className='flex'>
      <audio
        ref={audioRef}
        src={src}
        controls='controls'
        className='hidden'
        preload='metadata'
      />
      <button
        type='button'
        onClick={playAudio}
        className={`${playing ? 'animate-pulse' : ''}`}
      >
        <BsFillPlayCircleFill className='text-2xl text-accent-purple' />
      </button>

      {!done && (
        <div className='flex items-center px-2 py-1 ml-4 rounded bg-primary'>
          <span className='text-sm font-semibold tracking-tight text-type-primary'>
            Good to go?
          </span>
          <button type='button'>
            <MdDone
              className='ml-4 text-2xl hover:scale-110 text-accent-purple'
              onClick={() => setDone(true)}
            />
          </button>
          <button type='button' onClick={deleteRecording}>
            <MdOutlineClear className='ml-4 text-2xl hover:scale-110 text-accent-red' />
          </button>
        </div>
      )}
    </div>
  )
}

export default ManageRecording
