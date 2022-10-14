import { useState, useRef } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'

function AgeInput() {
  const [age, setAge] = useState('')
  const inputRef = useRef()
  let intervalId = useRef()

  const decrementAge = () => {
    if (!age || age == 1 || inputRef.current.value < 1) return
    setAge(Number(age) - 1)
  }

  const incrementAge = () => {
    setAge(Number(age) + 1)
  }

  const handleChange = (e) => {
    const reg = new RegExp('^[0-9]+$')

    if (
      (!e.target.value.match(reg) && e.target.value !== '') ||
      inputRef.current.value == '0'
    ) {
      return null
    }

    setAge(e.target.value)
  }

  const handleMouseDownInc = () =>
    (intervalId.current = setInterval(
      () => setAge((age) => Number(age) + 1),
      100
    ))

  const handleMouseDownDec = () => {
    intervalId.current = setInterval(() => {
      if (inputRef.current.value < 2) {
        return clearInterval(intervalId.current)
      }
      setAge((age) => Number(age) - 1)
    }, 100)
  }

  const handleMouseUp = () => {
    clearInterval(intervalId.current)
  }

  return (
    <div className='relative flex flex-col'>
      <label htmlFor='age' className='text-sm text-type-secondary'>
        Age
      </label>
      <input
        ref={inputRef}
        onChange={handleChange}
        value={age}
        type='text'
        name='age'
        className='w-full px-2 pb-1 pr-6 bg-transparent border-b outline-none border-type-secondary focus:border-accent-purple focus:border-b-2 caret-accent-purple text-type-white'
      />
      <div className='flex flex-col space-y-[1px] absolute top-3 right-0'>
        <button
          type='button'
          onClick={incrementAge}
          onMouseDown={handleMouseDownInc}
          onMouseUp={handleMouseUp}
        >
          <AiOutlineCaretUp className='text-sm cursor-pointer text-type-secondary hover:text-accent-purple' />
        </button>
        <button
          type='button'
          onClick={decrementAge}
          onMouseDown={handleMouseDownDec}
          onMouseUp={handleMouseUp}
        >
          <AiOutlineCaretDown className='text-sm cursor-pointer text-type-secondary hover:text-accent-purple' />
        </button>
      </div>
    </div>
  )
}

export default AgeInput
