import React from 'react'

function PersonaCard() {
  let p = {
    name: 'Edna',
    age: '83',
    memoji:
      'https://res.cloudinary.com/dpnkrz8c8/image/upload/v1664651962/classroom/Female_Memojis_dkwxqr.png',
    bio: "Endna's hobbies include mayonaise and purchasing bathtubs.",
  }

  return (
    <div className='flex flex-col items-center px-4 py-6 rounded-md mx-auto bg-secondary w-[150px]'>
      <img src={p.memoji} alt='' className='w-20' />
      <h4 className='mb-4 -mt-3 font-semibold text-type-primary'>{p.name}</h4>
      <p className='text-xs text-center text-type-secondary'>{p.bio}</p>
    </div>
  )
}

export default PersonaCard
