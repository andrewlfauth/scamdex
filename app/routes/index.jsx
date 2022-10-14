import { Link } from '@remix-run/react'
import { redirect } from '@remix-run/node'

import { getSession } from '../sessions'
import PersonaMaker from '../components/personas/PersonaMaker/index'

export async function loader({ request }) {
  const session = await getSession(request.headers.get('Cookie'))

  if (session.has('userId')) {
    return redirect('/call-center')
  }

  return null
}

function index() {
  return (
    <div className='px-4 py-20 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
      <div className='max-w-xl'>
        <h1 className='text-6xl font-semibold tracking-tight'>
          Keep track of your ongoing scambaits
        </h1>
        <Link
          to='/auth'
          className='block py-3 mt-10 text-xl font-semibold text-center text-gray-100 rounded bg-fuchsia-500 w-44'
        >
          Get started
        </Link>
      </div>
      <PersonaMaker />
    </div>
  )
}

export default index
