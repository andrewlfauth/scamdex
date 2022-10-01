import { Link } from '@remix-run/react'

function Navbar() {
  return (
    <div className='bg-blue-800 py-2'>
      <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Link to='/'>LOGO</Link>

        <div>
          <Link className='bg-gray-100 px-2 py-1 rounded' to='/auth'>
            Sign In
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
