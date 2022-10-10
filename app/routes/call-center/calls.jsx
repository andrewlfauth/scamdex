import { useAtom, atom } from 'jotai'

import CreateCall from '~/components/calls/CreateCall'
import SavedCalls from '~/components/calls/SavedCalls'

export const ActiveCallAtom = atom()

function Index() {
  const [activeCall, setActiveCall] = useAtom(ActiveCallAtom)

  return (
    <div className='mt-10'>
      <h1 className='text-lg font-semibold text-type-primary'>Calls</h1>

      <div className='w-full flex '>
        <SavedCalls />
        <CreateCall />
      </div>
    </div>
  )
}

export default Index
