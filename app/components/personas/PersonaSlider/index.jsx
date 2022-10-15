import { useState } from 'react'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

import PersonaCard from './PersonaCard'

function Index({ personas }) {
  const [currentIdx, setCurrentIdx] = useState(0)

  const handleNext = () => {
    setCurrentIdx((currentIdx + 1) % personas.length)
  }

  const handlePrev = () => {
    setCurrentIdx((currentIdx + personas.length - 1) % personas.length)
  }

  return (
    <div className='flex flex-col items-center w-fit pt-8 pb-20'>
      <div className='flex justify-between w-[250px]'>
        <button className='p-2 group' onClick={handlePrev}>
          <AiOutlineLeft className='text-type-secondary group-hover:text-type-primary' />
        </button>

        <div className='relative h-[200px] w-[150px]'>
          {personas.map((p, i) => (
            <PersonaCard key={i} persona={p} active={i == currentIdx} />
          ))}
        </div>

        <button className='p-2 group' onClick={handleNext}>
          <AiOutlineRight className='font-bold text-type-secondary group-hover:text-type-primary' />
        </button>
      </div>
    </div>
  )
}

export default Index
