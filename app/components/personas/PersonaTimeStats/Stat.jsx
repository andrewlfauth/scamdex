import ProgressBar from './ProgressBar'
import clsx from 'clsx'

function Stat({ persona, idx }) {
  const COLOR_CODE = clsx({
    'text-accent-blue': idx === 0,
    'text-accent-purple': idx === 1,
    'text-accent-red': idx === 2,
  })

  return (
    <div className='flex items-center justify-between p-4 rounded-md bg-secondary w-[250px] tracking-tight'>
      <div className='flex flex-col space-y-3'>
        <p className='text-sm text-type-secondary'>{persona.name}</p>
        <h3 className='text-3xl font-bold text-type-white'>
          {persona.time}
          <span className='text-sm'>hrs</span>
        </h3>
        <span className={`${COLOR_CODE} text-xs tracking-tighter`}>
          {idx === 0 ? '1st Place' : `${idx + 1}nd place`}
        </span>
      </div>
      <ProgressBar percent={persona.getPercent()} idx={idx} />
    </div>
  )
}

export default Stat
