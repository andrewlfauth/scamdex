import { useState, useRef, useEffect } from 'react'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

import PersonaCard from './PersonaCard'

function Index() {
  const [idx, setIdx] = useState(0)
  const sliderRef = useRef()

  const handleNext = () => {
    setIdx((idx + 1) % p.length)
  }

  const handlePrev = () => {
    setIdx((idx + p.length - 1) % p.length)
  }

  let p = [
    {
      name: 'Edna',
      age: '83',
      memoji:
        'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1664651962/classroom/Female_Memojis_dkwxqr.png',
      bio: "Endna's hobbies include mayonaise and purchasing bathtubs.",
    },
    {
      name: 'Bob',
      age: '3',
      memoji:
        'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1664651962/classroom/Female_Memojis_dkwxqr.png',
      bio: 'Fun stuff and stuff.',
    },
    {
      name: 'Jane',
      age: '33',
      memoji:
        'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1664651962/classroom/Female_Memojis_dkwxqr.png',
      bio: 'Everyting i sokay i think.',
    },
  ]

  return (
    <div className='px-10 py-3 border border-red-100 rounded-md'>
      <h2 className='mb-4 text-type-primary'>Your Personas</h2>

      <div className='flex items-center'>
        <button className='group p-2' onClick={handlePrev}>
          <AiOutlineLeft className='text-type-secondary group-hover:text-type-primary' />
        </button>

        <div ref={sliderRef} className='flex overflow-hidden w-[150px]'>
          {p.map((p, i) => (
            <PersonaCard key={p} persona={p} />
          ))}
        </div>

        <button className='group p-2' onClick={handleNext}>
          <AiOutlineRight className='font-bold text-type-secondary group-hover:text-type-primary' />
        </button>
      </div>
    </div>
  )
}

export default Index
