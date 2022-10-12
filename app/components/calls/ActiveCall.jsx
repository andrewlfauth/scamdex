import useRecordCallTime from '../hooks/useRecordCallTime'
import ScammerNameInput from '~/components/calls/ScammerNameInput'

function ActiveCall() {
  const {
    isSynced,
    activeCall,
    setActiveCall,
    startTimer,
    setStartTimer,
    callTime,
  } = useRecordCallTime()

  return isSynced ? (
    <div className='border-2 rounded-md border-secondary p-4 h-fit relative'>
      <button
        className='text-xs tracking-tight text-type-secondary absolute top-2 hover:text-accent-red left-4 block text-center'
        onClick={() => setActiveCall()}
      >
        End Call
      </button>

      <div className='border-b-2 border-inherit pb-4 flex justify-between items-end gap-10'>
        <h2 className='tracking-tight text-xl font-semibold text-type-primary whitespace-nowrap'>
          {activeCall.name}
        </h2>
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
              callTime.seconds.length === 1
                ? '0' + callTime.seconds
                : callTime.seconds
            }
            `}
          </span>
        </div>
      </div>

      <div className='py-4 border-b-2 border-inherit'>
        <span className='text-xs tracking-tight text-type-secondary block'>
          Scam Info
        </span>
        <div className='flex flex-col items-center justify-center'>
          <h3 className='text-lg tracking-tight font-semibold text-type-secondary'>{`Fake ${activeCall.scamCompany}`}</h3>
          <span className='block text-2xl tracking-tight text-type-primary font-semibold mt-1 mb-6'>
            {activeCall.scamNumber}
          </span>
          <span className='text-xs tracking-tight text-type-secondary block'>
            Talking to
          </span>
          {activeCall?.scammerName.map((name, i) => (
            <span key={i} className='font-semibold text-accent-red'>
              {name}
            </span>
          ))}
          <ScammerNameInput />
        </div>
      </div>

      <div className='pt-4 text-type-primary'>
        <span className='text-xs tracking-tight text-type-secondary block'>
          Bait Info
        </span>
        <div className='flex flex-col items-center justify-center'>
          <img src={activeCall.persona.memoji} alt='' />
          <span className='text-lg tracking-tight text-accent-blue font-semibold -mt-2'>
            {activeCall.persona.name}
          </span>
          <span className='text-2xl mt-1 tracking-tight font-semibold'>
            {activeCall.baiterNumber}
          </span>
        </div>
      </div>
    </div>
  ) : null
}

export default ActiveCall
