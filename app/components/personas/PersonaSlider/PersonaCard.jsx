function PersonaCard({ persona, className }) {
  return (
    <div
      className={`${className} flex flex-col items-center px-4 py-6 rounded-md mx-auto bg-secondary select-none max-w[150px] min-w-[150px] h-[200px]`}
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
