import { useAtom, atom } from 'jotai'
import { useActionData, useLoaderData, useFetchers } from '@remix-run/react'
import { json } from '@remix-run/node'

import CreateCall from '~/components/calls/CreateCall'
import SavedCalls from '~/components/calls/SavedCalls'
import {
  createCall,
  getAllCalls,
  addScammerName,
} from '../../utils/calls.server'
import ActiveCall from '~/components/calls/ActiveCall'
import { useEffect } from 'react'

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
  const allCalls = await getAllCalls(request)
  return { allCalls }
}

export const ActiveCallAtom = atom()

function Index() {
  const loader = useLoaderData()
  const [activeCall] = useAtom(ActiveCallAtom)

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
