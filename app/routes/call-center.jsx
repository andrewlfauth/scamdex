import { redirect } from '@remix-run/node'
import { useLoaderData, Outlet } from '@remix-run/react'

import { getUser } from '../utils/users.server'
import ControlPanel from '../components/dashboard/ControlPanel'
import CallCenterTitle from '../components/dashboard/CallCenterTitle'
import TmiChat from '../components/dashboard/tmi/index'
import ClientOnly from '../components/ClientOnly'

// export async function loader({ request }) {
//   const user = await getUser(request)
//   return user
// }

function Index() {
  // const user = useLoaderData()

  return (
    <div className='flex h-screen'>
      <div className='flex w-full mx-4 my-6'>
        <ControlPanel />
        <div className='px-10 w-full'>
          <CallCenterTitle />
          <div className='mt-4'>
            <Outlet />
          </div>
        </div>
        <ClientOnly>
          <TmiChat />
        </ClientOnly>
      </div>
    </div>
  )
}

export default Index
