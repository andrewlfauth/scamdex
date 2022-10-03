function PersonaCard({ persona, active }) {
  return (
    <div
      className={`${
        active ? 'opacity-100 duration-300' : 'opacity-0 scale-[0.95]'
      } flex flex-col items-center px-4 py-6 rounded-md bg-secondary select-none max-w[150px] min-w-[150px] h-[200px] absolute left-0 top-0`}
    >
      <img src={persona.memoji} alt='' className='w-20' />
      <h4 className='mb-4 -mt-3 font-semibold text-type-primary'>
        {persona.name}
      </h4>
      <p className='text-xs text-center text-type-secondary'>{persona.bio}</p>
    </div>
  )
}

export default PersonaCard
