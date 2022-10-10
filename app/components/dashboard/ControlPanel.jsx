import { BiPhoneCall } from 'react-icons/bi'
import { IoGrid } from 'react-icons/io5'
import { MdFace } from 'react-icons/md'
import { Link, useLocation } from '@remix-run/react'

function ControlPanel() {
  const path = useLocation().pathname

  return (
    <div className='bg-secondary space-y-4 flex flex-col px-6 h-full rounded-md pt-20'>
      <Link to='/call-center'>
        <IoGrid
          className={`${
            path === '/call-center'
              ? 'text-accent-blue'
              : 'text-type-secondary hover:text-accent-blue'
          } text-xl`}
        />
      </Link>
      <Link to='/call-center/calls'>
        <BiPhoneCall
          className={`${
            path === '/call-center/calls'
              ? 'text-accent-blue'
              : 'text-type-secondary hover:text-accent-blue'
          } text-xl`}
        />
      </Link>
      <Link to='/call-center/personas'>
        <MdFace
          className={`${
            path === '/call-center/personas'
              ? 'text-accent-blue'
              : 'text-type-secondary hover:text-accent-blue'
          } text-xl`}
        />
      </Link>
    </div>
  )
}

export default ControlPanel
