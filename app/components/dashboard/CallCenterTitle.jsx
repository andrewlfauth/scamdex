import { VscEdit } from 'react-icons/vsc'
import { useState, useEffect, useRef } from 'react'

import useModal from '../hooks/useModal'

function CallCenterTitle() {
  const [title, setTitle] = useState()
  const inputRef = useRef()
  const { showModal, setShowModal, modalRef } = useModal()

  const saveName = () => {
    setTitle(inputRef.current.value)
    setShowModal(false)
  }

  useEffect(() => {
    const existingTitle = window.localStorage.getItem('CALL_CENTER_TITLE')

    if (existingTitle && existingTitle !== 'undefined') {
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
      <h1 className='relative flex pt-2 pr-4 -mt-2 text-2xl font-semibold cursor-pointer text-type-white group w-fit'>
        {title}
        <VscEdit
          className={`${
            showModal ? '' : 'hidden group-hover:block'
          } text-type-secondary rounded-md cursor-pointer -mt-3 ml-1  text-[18px]`}
          onClick={() => setShowModal(!showModal)}
        />
      </h1>
      <p className='mt-1 text-sm text-type-secondary'>
        Welcome to your call center.
      </p>

      {showModal && (
        <div
          ref={modalRef}
          className='absolute px-4 py-3 mt-2 rounded bg-secondary'
        >
          <input
            ref={inputRef}
            type='text'
            autoFocus={showModal}
            className='px-2 py-1 bg-transparent border-2 rounded border-type-secondary text-type-white outline-accent-blue ring-0'
          />
          <button
            className='ml-4 text-type-white hover:text-accent-blue'
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
