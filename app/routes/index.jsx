import { Link } from '@remix-run/react'

function index() {
  return (
    <div className='px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl py-20'>
      <div className='max-w-xl'>
        <h1 className='text-6xl font-semibold tracking-tight'>
          Keep track of your ongoing scambaits
        </h1>
        <Link
          to='/auth'
          className='bg-fuchsia-500 text-gray-100 text-xl rounded font-semibold py-3 w-44 text-center block mt-10'
        >
          Get started
        </Link>
      </div>
    </div>
  )
}

export default index
