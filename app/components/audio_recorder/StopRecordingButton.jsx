import { BsStopCircle } from 'react-icons/bs'

function StopRecordingButton({ stopRecording, disabled }) {
  return (
    <div className='flex items-center'>
      <button type='button' onClick={stopRecording} disabled={disabled}>
        <BsStopCircle className='text-2xl text-red-500 animate-pulse' />
      </button>
      <span className='ml-4 text-sm animate-pulse text-type-white'>
        Recording...
      </span>
    </div>
  )
}

export default StopRecordingButton
