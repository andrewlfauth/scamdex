import { useEffect } from 'react'

export default function usePauseChat(state, controls, settings) {
  const handleMouseEnter = () => {
    if (state === 'playing' && settings.pauseOnHover) {
      controls.pause()
      console.log(settings)
    }
  }

  const handleMouseLeave = () => {
    if (state !== 'stopped' && settings.pauseOnHover) {
      controls.play()
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'p') controls.pause()
    }

    const handleKeyUp = (e) => {
      if (e.key === 'p') controls.play()
    }

    if (settings.pauseOnP) {
      if (state !== 'stopped') {
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)
      } else {
        document.removeEventListener('keydown', handleKeyDown)
        document.removeEventListener('keyup', handleKeyUp)
      }
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [settings, state, controls])

  return { handleMouseLeave, handleMouseEnter }
}
