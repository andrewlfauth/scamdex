import { Link, useLocation } from '@remix-run/react'

function Navbar() {
  const path = useLocation().pathname

  return (
    <div className='py-2 bg-blue-800'>
      <nav className='flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <Link to='/'>LOGO</Link>

        <div>
          {path === '/' || path === '/auth' ? (
            <Link className='px-2 py-1 bg-gray-100 rounded' to='/auth'>
              Sign In
            </Link>
          ) : (
            <Link className='px-2 py-1 bg-gray-100 rounded' to='/logout'>
              Sign Out
            </Link>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
