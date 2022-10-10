import { MdOutlineDescription, MdOutlineTimelapse } from 'react-icons/md'
import { BiPhoneCall } from 'react-icons/bi'

function PersonaCard({ persona, active }) {
  const formatBio = (bio) => {
    if (bio.length < 50) return bio
    let short = bio.substring(0, 50) + '...'
    return short
  }

  formatBio(
    'Thos is a really long bio that someone may right if anybody ever uses this stupid app that i am making. god i need a job is this all for naught IDK. I dont thinks so I wil make it'
  )

  return (
    <div
      className={`${
        active ? 'opacity-100 duration-300' : 'opacity-0 scale-[0.95]'
      } flex flex-col items-center px-4 py-6 rounded-md bg-secondary select-none max-w[150px] min-w-[150px] absolute left-0 top-0`}
    >
      <img src={persona.memoji} alt='' className='w-20' />
      <h4 className='mb-4 -mt-3 font-semibold text-type-primary'>
        {persona.name}
      </h4>

      <p className='text-xs text-center text-type-secondary'>
        {formatBio(persona.bio)}
      </p>

      <div className='z-10 flex justify-around w-full px-2 py-1 mt-4 text-xl rounded-md text-type-secondary'>
        <MdOutlineDescription className='cursor-help hover:text-accent-blue' />
        <BiPhoneCall className='cursor-help hover:text-accent-purple' />
        <MdOutlineTimelapse className='cursor-help hover:text-accent-red' />
      </div>
    </div>
  )
}

export default PersonaCard
