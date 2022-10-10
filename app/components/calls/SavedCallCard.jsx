import { useAtom } from 'jotai'

import { ActiveCallAtom } from '~/routes/call-center/calls'

function SavedCallCard({ call }) {
  const [activeCall, setActiveCall] = useAtom(ActiveCallAtom)

  return (
    <div className='bg-secondary rounded-md p-4 relative'>
      <div className='flex items-end mb-4'>
        <h3 className='text-type-secondary font-semibold'>{call.name}</h3>
        <button
          className='bg-accent-purple font-bold py-1 text-secondary px-2 ml-4 rounded w-full hover:bg-opacity-80 duration-100'
          onClick={() => setActiveCall(call.id)}
        >
          Open Call
        </button>
      </div>
      <span className='font-semibold block text-type-secondary text-sm mb-1'>
        Fake {call.scamCompany}
      </span>
      <span className='font-semibold block text-type-secondary'>
        {call.scamNumber}
      </span>
    </div>
  )
}

export default SavedCallCard
