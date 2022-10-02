import { useState, useRef, useEffect } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'

function AgeInput() {
  const [age, setAge] = useState('')
  const inputRef = useRef()

  useEffect(() => {}, [])

  return (
    <div className='flex flex-col relative'>
      <label htmlFor='character-age' className='text-type-secondary text-sm'>
        Age
      </label>
      <input
        ref={inputRef}
        onChange={(e) => setAge(e.target.value)}
        value={age}
        type='text'
        name='age'
        className='bg-transparent border-b border-type-secondary px-2 pb-1 w-full outline-none focus:border-accent-purple focus:border-b-2 caret-accent-purple text-type-white pr-6'
      />
      <div className='flex flex-col space-y-[1px] absolute top-3 right-0'>
        <button type='button' onClick={() => setAge(Number(age) + 1)}>
          <AiOutlineCaretUp className='text-type-secondary cursor-pointer hover:text-accent-purple text-sm' />
        </button>
        <button type='button' onClick={() => setAge(Number(age) - 1)}>
          <AiOutlineCaretDown className='text-type-secondary cursor-pointer hover:text-accent-purple text-sm' />
        </button>
      </div>
    </div>
  )
}

export default AgeInput
