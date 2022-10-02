function NameInput() {
  return (
    <div className='flex flex-col w-[70%]'>
      <label htmlFor='name' className='text-type-secondary text-sm'>
        Name
      </label>
      <input
        type='text'
        name='name'
        className='border-b border-type-secondary bg-transparent outline-none focus:border-b-2 focus:border-accent-purple active:border-accent-purple caret-accent-purple text-type-white pb-1 px-2'
      />
    </div>
  )
}

export default NameInput
