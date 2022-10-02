import { useState, useRef, useEffect } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'

function AgeInput() {
  const [age, setAge] = useState('')
  const inputRef = useRef()

  useEffect(() => {}, [])

  return (
    <div className='relative flex flex-col'>
      <label htmlFor='character-age' className='text-sm text-type-secondary'>
        Age
      </label>
      <input
        ref={inputRef}
        onChange={(e) => setAge(e.target.value)}
        value={age}
        type='text'
        name='age'
        className='w-full px-2 pb-1 pr-6 bg-transparent border-b outline-none border-type-secondary focus:border-accent-purple focus:border-b-2 caret-accent-purple text-type-white'
      />
      <div className='flex flex-col space-y-[1px] absolute top-3 right-0'>
        <button type='button' onClick={() => setAge(Number(age) + 1)}>
          <AiOutlineCaretUp className='text-sm cursor-pointer text-type-secondary hover:text-accent-purple' />
        </button>
        <button type='button' onClick={() => setAge(Number(age) - 1)}>
          <AiOutlineCaretDown className='text-sm cursor-pointer text-type-secondary hover:text-accent-purple' />
        </button>
      </div>
    </div>
  )
}

export default AgeInput