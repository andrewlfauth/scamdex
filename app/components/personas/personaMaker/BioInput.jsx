function BioInput() {
  return (
    <div className='flex flex-col mt-2'>
      <label htmlFor='bio' className='text-type-secondary text-sm mb-2'>
        Persona Bio
      </label>
      <textarea
        name='bio'
        cols='20'
        rows='3'
        placeholder='ex. Edna is 82 and enjoys mayonaise and bathtubs.'
        className='border border-type-secondary bg-transparent rounded-md outline-accent-purple text-sm caret-accent-purple p-2 text-type-white placeholder:text-xs placeholder:text-type-secondary'
      ></textarea>
    </div>
  )
}

export default BioInput
