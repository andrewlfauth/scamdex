import { useRef, useEffect, useState } from 'react'
export default function useModal() {
  const [showModal, setShowModal] = useState(false)
  const modalRef = useRef()

  const handleClick = (e) => {
    if (!modalRef.current.contains(e.target)) {
      setShowModal(false)
    }
  }

  const handleEsc = (e) => {
    if (e.key === 'Escape') {
      setShowModal(false)
    }
  }

  useEffect(() => {
    const animateIn = [
      { transform: 'scale(0.9)', opacity: 0 },
      { transform: 'scale(1)', opacity: 1 },
    ]

    if (showModal) {
      modalRef.current.animate(animateIn, { duration: 100 })
      document.addEventListener('click', handleClick)
      document.addEventListener('keydown', handleEsc)

      return () => document.removeEventListener('click', handleClick)
    } else {
      document.removeEventListener('click', handleClick)
    }
  }, [showModal])

  return { showModal, setShowModal, modalRef }
}
