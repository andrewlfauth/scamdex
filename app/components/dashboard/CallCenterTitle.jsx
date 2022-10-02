import { VscEdit } from 'react-icons/vsc'
import { useState, useEffect, useRef } from 'react'
import { Form } from '@remix-run/react'

function CallCenterTitle() {
  const [title, setTitle] = useState()
  const [showForm, setShowForm] = useState(false)
  const inputRef = useRef()

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
    window.localStorage.setItem('CALL_CENTER_TITLE', title)
  }, [title])

  return title ? (
    <>
      <h1 className='text-2xl font-semibold text-type-white relative group cursor-pointer flex'>
        {title}
        <VscEdit
          className=' text-type-secondary rounded-md cursor-pointer group-hover:block -mt-3 ml-1 hidden hover:text-accent-blue'
          onClick={() => setShowForm(true)}
        />
      </h1>
      <p className='text-sm text-type-secondary mt-1'>
        Welcome to your call center.
      </p>

      {showForm && (
        <div className='bg-secondary mt-2 absolute p-4 rounded'>
          <input
            ref={inputRef}
            type='text'
            className='bg-type-secondary rounded px-2 py-1 text-type-white outline-accent-blue'
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
