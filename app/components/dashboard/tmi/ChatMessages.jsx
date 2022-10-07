import { useEffect, useRef } from 'react'
import { useAtom } from 'jotai'

import Message from './Message'
import { chatSettingsStorageAtom } from './index'

function ChatMessages({ state, chatMessages, controls }) {
  const chatRef = useRef()
  const [settings, setSettings] = useAtom(chatSettingsStorageAtom)

  // pauseOnP listeners
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

  const handleMouseEnter = () => {
    if (state === 'playing') {
      controls.pause()
    }
  }

  const handleMouseLeave = () => {
    controls.play()
  }

  return (
    <div
      ref={chatRef}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      className='inline h-full p-3 chat'
    >
      {chatMessages.map((m, i) => (
        <Message key={i} item={m} />
      ))}
    </div>
  )
}

export default ChatMessages
