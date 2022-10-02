import { redirect } from '@remix-run/node'
import { useLoaderData, Outlet } from '@remix-run/react'

import { getUser } from '../utils/users.server'
import ControlPanel from '../components/dashboard/ControlPanel'
import CallCenterTitle from '../components/dashboard/CallCenterTitle'

// export async function loader({ request }) {
//   const user = await getUser(request)
//   return user
// }

function Index() {
  // const user = useLoaderData()

  return (
    <div className='flex h-screen'>
      <div className='flex mx-4 my-10'>
        <ControlPanel />
        <div className='px-10'>
          <CallCenterTitle />
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Index
