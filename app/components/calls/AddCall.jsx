import { useState } from 'react'

import { CgAddR } from 'react-icons/cg'
import AddCallForm from './AddCallForm'

function AddCall() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div>
      <h1 className='text-2xl font-semibold tracking-tight'>Your Calls</h1>
      <button
        onClick={() => setShowForm(true)}
        className='flex flex-col items-center justify-center p-2 space-y-2 text-white rounded shadow bg-emerald-500 hover:scale-[1.01] w-fit'
      >
        <CgAddR className='text-4xl' />
      </button>

      <AddCallForm closeForm={() => setShowForm(false)} />
    </div>
  )
}

export default AddCall
