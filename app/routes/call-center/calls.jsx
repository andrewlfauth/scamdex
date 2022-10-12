import { useAtom, atom } from 'jotai'
import { useActionData, useLoaderData } from '@remix-run/react'

import CreateCall from '~/components/calls/CreateCall'
import SavedCalls from '~/components/calls/SavedCalls'
import { createCall, getAllCalls } from '../../utils/calls.server'
import ActiveCall from '~/components/calls/ActiveCall'
import ClientOnly from '../../components/ClientOnly'

export async function action({ request }) {
  const formData = await request.formData()
  const { action, ...values } = Object.fromEntries(formData)

  if (action === 'create') {
    await createCall(request, values)
  }
  return null
}

export async function loader({ request }) {
  const allCalls = await getAllCalls(request)
  return { allCalls }
}

export const ActiveCallAtom = atom()

function Index() {
  const loader = useLoaderData()
  const action = useActionData()
  const [activeCall, setActiveCall] = useAtom(ActiveCallAtom)

  return (
    <div className='mt-10'>
      <h1 className='text-lg font-semibold text-type-primary'>Calls</h1>
      <div className='flex w-full '>
        <SavedCalls calls={loader.allCalls} />
        {activeCall && <ActiveCall />}

        <CreateCall />
      </div>
    </div>
  )
}

export default Index
