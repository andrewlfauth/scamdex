import { BiPhoneCall } from 'react-icons/bi'
import { IoGrid } from 'react-icons/io5'
import { Link, useLocation } from '@remix-run/react'

function ControlPanel() {
  const path = useLocation().pathname

  return (
    <div className='bg-secondary px-6 h-full rounded-md pt-20'>
      <Link to='/call-center'>
        <IoGrid
          className={`${
            path === '/call-center' ? 'text-accent-blue' : 'text-type-secondary'
          } text-xl`}
        />
      </Link>
    </div>
  )
}

export default ControlPanel
