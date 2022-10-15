function RecordButton({ startRecording, disabled }) {
  return (
    <div className='relative flex group'>
      <button
        type='button'
        className='w-[22px] h-[22px]  hover:scale-105 bg-accent-purple rounded-full'
        onClick={startRecording}
        disabled={disabled}
      ></button>
      <span className='absolute ml-4 text-sm opacity-0 pointer-events-none group-hover:opacity-100 left-6 text-type-secondary top-[2px]'>
        Record
      </span>
    </div>
  )
}

export default RecordButton
