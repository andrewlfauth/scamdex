import { VscEdit } from 'react-icons/vsc'
import { useState, useEffect, useRef } from 'react'

function CallCenterTitle() {
  const [title, setTitle] = useState()
  const [showForm, setShowForm] = useState(false)
  const inputRef = useRef()

  const closeOnEsc = (e) => {
    if (e.key === 'Escape') {
      setShowForm(false)
    }
  }

  const saveName = () => {
    setTitle(inputRef.current.value)
    setShowForm(false)
  }

  useEffect(() => {
    const existingTitle = window.localStorage.getItem('CALL_CENTER_TITLE')
    if (existingTitle) {
      setTitle(existingTitle)
    } else {
      setTitle('You Call Center')
    }
  }, [])

  useEffect(() => {
    if (showForm) {
      document.addEventListener('keydown', closeOnEsc)
      return () => document.removeEventListener('keydown', closeOnEsc)
    }
  }, [showForm])

  useEffect(() => {
    window.localStorage.setItem('CALL_CENTER_TITLE', title)
  }, [title])

  return title ? (
    <>
      <h1 className='text-2xl font-semibold text-type-white relative group cursor-pointer flex pr-4 pt-2 -mt-2'>
        {title}
        <VscEdit
          className={`${
            showForm ? 'text-accent-blue' : 'hidden group-hover:block'
          } text-type-secondary rounded-md cursor-pointer -mt-3 ml-1  text-[18px] `}
          onClick={() => setShowForm(!showForm)}
        />
      </h1>
      <p className='text-sm text-type-secondary mt-1'>
        Welcome to your call center.
      </p>

      {showForm && (
        <div className='bg-secondary mt-2 absolute px-4 py-3 rounded'>
          <input
            ref={inputRef}
            type='text'
            className='border-2 border-type-secondary rounded bg-transparent px-2 py-1 text-type-white outline-accent-blue ring-0'
          />
          <button
            className='text-type-white ml-4 hover:text-accent-blue'
            onClick={saveName}
          >
            Save
          </button>
        </div>
      )}
    </>
  ) : null
}

export default CallCenterTitle
