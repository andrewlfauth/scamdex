import useRecordCallTime from '../hooks/useRecordCallTime'
import ScammerNameInput from '~/components/calls/ScammerNameInput'
import CallTimer from './CallTimer'
import useActiveCall from '../hooks/useActiveCall'

function ActiveCall() {
  const { activeCall, setActiveCall } = useActiveCall()

  return (
    <div className='border-2 rounded-md border-secondary p-4 h-fit relative'>
      <button
        className='text-xs tracking-tight text-type-secondary absolute top-2 hover:text-accent-red left-4 block text-center'
        onClick={() => setActiveCall()}
      >
        End Call
      </button>

      <div className='border-b-2 border-inherit pb-4 flex justify-between items-end gap-10'>
        <h2 className='tracking-tight w-1/3 text-xl font-semibold text-type-primary whitespace-nowrap'>
          {activeCall.name}
        </h2>
        <CallTimer />
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
  )
}

export default ActiveCall
