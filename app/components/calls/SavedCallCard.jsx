import useActiveCall from '../hooks/useActiveCall'

function SavedCallCard({ call }) {
  const { activeCall, setActiveCall } = useActiveCall()
  let isActive = activeCall && activeCall._id == call._id

  return (
    <div className='p-4 flex justify-between rounded-md bg-secondary space-x-10'>
      <div>
        <h3 className='font-semibold text-type-primary tracking-tight whitespace-nowrap text-sm'>
          {call.name}
        </h3>
        <span className='text-2xl text-accent-blue font-semibold tracking-tight ml-2 py-2 block'>
          1.2 hrs
        </span>
        <span className='text-xs block font-semibold text-type-secondary'>
          {call.scamCompany}
        </span>
      </div>
      <div className='flex flex-col justify-between items-end'>
        <img
          src={call.persona.memoji}
          alt=''
          className='relative -top-2 -right-2'
        />
        <button
          className={`${
            isActive ? 'bg-accent-red' : 'bg-accent-blue'
          } w-16 text-xs py-1 font-bold duration-100 rounded  hover:bg-opacity-80 text-secondary`}
          onClick={isActive ? () => setActiveCall() : () => setActiveCall(call)}
        >
          {isActive ? 'Close' : 'Open'}
        </button>
      </div>
    </div>
  )
}

export default SavedCallCard
