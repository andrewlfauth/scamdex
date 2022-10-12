import { useAtom } from 'jotai'

import { ActiveCallAtom } from '~/routes/call-center/calls'

function SavedCallCard({ call }) {
  const [, setActiveCall] = useAtom(ActiveCallAtom)

  return (
    <div className='relative p-4 rounded-md bg-secondary'>
      <div className='flex items-end mb-4'>
        <h3 className='font-semibold text-type-secondary'>{call.name}</h3>
        <button
          className='w-full px-2 py-1 ml-4 font-bold duration-100 rounded bg-accent-purple text-secondary hover:bg-opacity-80'
          onClick={() => setActiveCall(call)}
        >
          Open Call
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
