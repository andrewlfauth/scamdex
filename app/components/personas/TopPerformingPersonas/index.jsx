function Index() {
  let data = [
    {
      name: 'Betty',
      memoji:
        'https://res.cloudinary.com/dpnkrz8c8/image/upload/w_50/v1664651990/classroom/Male_Memojis_jzacb4.png',
      timeWasted: '121.2 hrs',
    },
    {
      name: 'Bill',
      memoji:
        'https://res.cloudinary.com/dpnkrz8c8/image/upload/w_50/v1664651959/classroom/Female_Memojis_1_rc28un.png',
      timeWasted: '111.5 hrs',
    },
    {
      name: 'Pete',
      memoji:
        'https://res.cloudinary.com/dpnkrz8c8/image/upload/w_50/v1664651959/classroom/Female_Memojis_1_rc28un.png',
      timeWasted: '109.9 hrs',
    },
  ]

  return (
    <div className='bg-secondary rounded-md p-4'>
      <h2 className='mb-4 text-type-primary'>Top Time Wasters</h2>

      <div className='flex flex-col space-y-4'>
        <div className='flex items-center'>
          <img
            className='bg-neutral-800 rounded-full'
            src={data[0].memoji}
            alt=''
          />
          <div className='ml-2 tracking-tight flex flex-col'>
            <span className='font-semibold text-type-primary'>
              {data[0].timeWasted}
            </span>
            <span className='text-xs mt-1 text-accent-blue'>
              {data[0].name}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
