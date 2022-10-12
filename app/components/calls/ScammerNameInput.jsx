import { useRef, useEffect } from 'react'
import { useFetcher } from '@remix-run/react'
import { AiOutlinePlus } from 'react-icons/ai'
import { useAtom } from 'jotai'

import { ActiveCallAtom } from '~/routes/call-center/calls'

function ScammerNameInput() {
  const [activeCall, setActiveCall] = useAtom(ActiveCallAtom)
  const fetcher = useFetcher()
  const inputRef = useRef()

  const addScammer = () => {
    let scammerName = inputRef.current.value
    fetcher.submit(
      {
        action: 'addScammer',
        scammerName,
        callId: activeCall._id,
      },
      { method: 'post' }
    )
    inputRef.current.value = ''
  }

  useEffect(() => {
    if (fetcher.data?.updatedActiveCall) {
      setActiveCall(fetcher.data.updatedActiveCall)
    }
  }, [fetcher.data, setActiveCall])

  return (
    <div className='mt-6'>
      <div className='flex relative'>
        <input
          ref={inputRef}
          type='text'
          name='scammerName'
          className='block border-2 border-secondary mx-auto w-3/5 rounded px-4 py-1 text-lg bg-primary text-accent-red text-center outline-accent-red'
        />
        <button
          onClick={addScammer}
          className='absolute translate-y-1 right-4 text-accent-red text-2xl border-2 hover:bg-accent-red hover:text-primary duration-200 border-secondary rounded-full'
        >
          <AiOutlinePlus />
        </button>
      </div>
      <span className='text-xs tracking-tight text-type-secondary block mt-1 text-center'>
        Scammer's fake name
      </span>
    </div>
  )
}

export default ScammerNameInput
