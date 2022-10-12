import useActiveCall from '../hooks/useActiveCall'

function SavedCallCard({ call }) {
  const { activeCall, setActiveCall } = useActiveCall()
  let isActive = activeCall && activeCall._id == call._id

  return (
    <div className='relative p-4 rounded-md bg-secondary'>
      <div className='flex items-end justify-between mb-4'>
        <h3 className='font-semibold text-type-secondary whitespace-nowrap'>
          {call.name}
        </h3>
        <button
          className={`${
            isActive ? 'bg-accent-red' : 'bg-accent-blue'
          } w-24 py-1 ml-4 font-bold duration-100 rounded text-secondary hover:bg-opacity-80`}
          onClick={isActive ? () => setActiveCall() : () => setActiveCall(call)}
        >
          {isActive ? 'Close Call' : 'Open Call'}
        </button>
      </div>
      <span className='block mb-1 text-sm font-semibold text-type-secondary'>
        Fake {call.scamCompany}
      </span>
      <span className='block font-semibold text-type-secondary'>
        {call.scamNumber}
      </span>
    </div>
  )
}

export default SavedCallCard
