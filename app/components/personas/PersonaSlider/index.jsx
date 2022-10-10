import { useState } from 'react'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

import PersonaCard from './PersonaCard'

function Index() {
  const [currentIdx, setCurrentIdx] = useState(0)

  const handleNext = () => {
    setCurrentIdx((currentIdx + 1) % p.length)
  }

  const handlePrev = () => {
    setCurrentIdx((currentIdx + p.length - 1) % p.length)
  }

  let p = [
    {
      name: 'Edna',
      age: '83',
      memoji:
        'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1664651959/classroom/Female_Memojis_1_rc28un.png',
      bio: "Endna's hobbies include mayonaise and purchasing bathtubs.",
    },
    {
      name: 'Bob',
      age: '3',
      memoji:
        'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1664651994/classroom/Male_Memojis_1_o9vvoj.png',
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
    <div className='flex flex-col items-center w-fit pt-8 pb-20'>
      <div className='flex justify-between w-[250px]'>
        <button className='p-2 group' onClick={handlePrev}>
          <AiOutlineLeft className='text-type-secondary group-hover:text-type-primary' />
        </button>

        <div className='relative h-[200px] w-[150px]'>
          {p.map((p, i) => (
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
