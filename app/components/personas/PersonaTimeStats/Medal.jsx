function Medal({ totalTimeWasted }) {
  const metals = {
    bronze:
      'https://res.cloudinary.com/dpnkrz8c8/image/upload/w_40/v1664845976/bait-tracker/bronze-medal_xskjqv.svg',
    silver:
      'https://res.cloudinary.com/dpnkrz8c8/image/upload/w_40/v1664846390/bait-tracker/silver-medal_kecapr.svg',
    gold: 'https://res.cloudinary.com/dpnkrz8c8/image/upload/w_40/v1664846418/bait-tracker/gold-medal_hj6fq4.svg',
  }

  const awardedMetal =
    totalTimeWasted <= 48
      ? totalTimeWasted <= 24
        ? metals.bronze
        : metals.silver
      : metals.gold

  return (
    <div className='relative cursor-help h-fit group'>
      <img className='self-start w-10' src={awardedMetal} alt='' />
      <div
        style={{ transition: 'opacity .2s' }}
        className='absolute flex flex-col w-32 p-3 space-y-2 text-xs rounded-md opacity-0 top-10 group-hover:opacity-100 -z-10 group-hover:z-0 bg-secondary text-type-secondary'
      >
        <span className='flex justify-between'>
          <img src={metals.gold} alt='' className='w-5' /> 48+ hrs
        </span>
        <span className='flex justify-between'>
          <img src={metals.silver} alt='' className='w-5' /> 24 - 48 hrs
        </span>
        <span className='flex justify-between'>
          <img src={metals.bronze} alt='' className='w-5' /> 0 - 24 hrs
        </span>
      </div>
    </div>
  )
}

export default Medal
