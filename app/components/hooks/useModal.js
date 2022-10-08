import { useRef, useEffect, useState } from 'react'
export default function useModal() {
  const [showModal, setShowModal] = useState(false)
  const modalRef = useRef()

  const handleClick = (e) => {
    if (!modalRef.current.contains(e.target)) {
      setShowModal(false)
    }
  }

  const animateIn = [
    { transform: 'scale(0.9)', opacity: 0 },
    { transform: 'scale(1)', opacity: 1 },
  ]

  useEffect(() => {
    if (showModal) {
      modalRef.current.animate(animateIn, { duration: 100 })
      document.addEventListener('click', handleClick)

      return () => document.removeEventListener('click', handleClick)
    } else {
      document.removeEventListener('click', handleClick)
    }
  }, [showModal])

  return { showModal, setShowModal, modalRef }
}
