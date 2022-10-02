import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

import PersonaCard from './PersonaCard'

function index() {
  return (
    <div className='px-10 py-3 border border-red-100 rounded-md'>
      <h2 className='mb-4 text-type-primary'>Your Personas</h2>

      <div className='flex items-center'>
        <button className='group'>
          <AiOutlineLeft className='text-type-secondary group-hover:text-type-primary' />
        </button>
        <PersonaCard />
        <button className='group'>
          <AiOutlineRight className='font-bold text-type-secondary group-hover:text-type-primary' />
        </button>
      </div>
    </div>
  )
}

export default index
