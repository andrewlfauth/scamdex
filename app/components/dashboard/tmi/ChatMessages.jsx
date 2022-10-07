import { useEffect, useRef } from 'react'
import { useAtom } from 'jotai'

import Message from './Message'
import { chatSettingsStorageAtom } from './index'
import usePauseChat from '../../hooks/usePauseChat'

function ChatMessages({ state, chatMessages, controls }) {
  const chatRef = useRef()
  const [settings, setSettings] = useAtom(chatSettingsStorageAtom)

  const { handleMouseEnter, handleMouseLeave } = usePauseChat(
    state,
    controls,
    settings
  )

  return (
    <div
      ref={chatRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='inline h-full p-3 chat'
    >
      {chatMessages.map((m, i) => (
        <Message key={i} item={m} />
      ))}
    </div>
  )
}

export default ChatMessages
