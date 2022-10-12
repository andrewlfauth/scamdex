import useRecordCallTime from '../hooks/useRecordCallTime'

function CallTimer() {
  const { isSynced, startTimer, setStartTimer, callTime } = useRecordCallTime()

  return isSynced ? (
    <>
      <button
        className={`${
          startTimer ? 'bg-accent-red' : 'bg-accent-blue'
        } rounded text-primary font-semibold hover:bg-opacity-90 tracking-tight whitespace-nowrap w-32 py-2`}
        onClick={() => setStartTimer(!startTimer)}
      >
        {startTimer ? 'Stop Timer' : 'Start Timer'}
      </button>
      <div className='flex flex-col'>
        <span className='text-xs tracking-tight text-type-secondary block text-center whitespace-nowrap'>
          Time Wasted
        </span>
        <span className='text-2xl font-semibold tracking-tight text-type-primary block'>
          {`${
            callTime.hours.toString().length === 1
              ? '0' + callTime.hours
              : callTime.hours
          }:${
            callTime.minutes.toString().length === 1
              ? '0' + callTime.minutes
              : callTime.minues
          }:${
            callTime.seconds.toString().length === 1
              ? '0' + callTime.seconds
              : callTime.seconds
          }
            `}
        </span>
      </div>
    </>
  ) : null
}

export default CallTimer
