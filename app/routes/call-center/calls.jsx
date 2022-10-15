import { useAtom, atom } from 'jotai'
import { useLoaderData } from '@remix-run/react'

import CreateCall from '~/components/calls/CreateCall'
import SavedCalls from '~/components/calls/SavedCalls'
import {
  createCall,
  getUsersCalls,
  addScammerName,
} from '../../utils/calls.server'
import { getUsersPersonas } from '../../utils/personas.server'
import ActiveCall from '~/components/calls/ActiveCall'

export async function action({ request }) {
  const formData = await request.formData()
  const { action, ...values } = Object.fromEntries(formData)

  if (action === 'create') {
    await createCall(request, values)
  }

  if (action === 'addScammer') {
    const updatedActiveCall = await addScammerName(values)
    return { updatedActiveCall }
  }

  return null
}

export async function loader({ request }) {
  const userCalls = await getUsersCalls(request)
  const userPersonas = await getUsersPersonas(request)
  return { userCalls, userPersonas }
}

export const ActiveCallAtom = atom()

function Index() {
  const loader = useLoaderData()
  const [activeCall] = useAtom(ActiveCallAtom)

  return (
    <div className='mt-10'>
      <h1 className='text-lg font-semibold text-type-primary'>Calls</h1>
      <div className='flex w-full '>
        <SavedCalls calls={loader.userCalls} />
        {activeCall && <ActiveCall />}
        <CreateCall personas={loader.userPersonas} />
      </div>
    </div>
  )
}

export default Index
