import Medal from './Medal'

function Totals({ totalTimeWasted }) {
  return (
    <div className='flex justify-between p-4 rounded-md bg-secondary w-[250px] tracking-tight'>
      <div className='flex flex-col space-y-3'>
        <p className='text-sm text-type-primary'>You've Wasted</p>
        <h3 className='text-3xl font-bold text-type-white'>
          {totalTimeWasted.toFixed(1)}
          <span className='text-sm'>hrs</span>
        </h3>
        <span className='text-xs tracking-tighter text-type-secondary'>
          of scammer's time
        </span>
      </div>

      <Medal totalTimeWasted={totalTimeWasted} />
    </div>
  )
}

export default Totals
