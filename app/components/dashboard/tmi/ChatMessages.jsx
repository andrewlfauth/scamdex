import { useRef } from 'react'
import { useAtom } from 'jotai'

import Message from './Message'
import { chatSettingsAtom } from './index'

function ChatMessages({ chatMessages, play, pause }) {
  const [settings, setSettings] = useAtom(chatSettingsAtom)
  const chatRef = useRef()

  return (
    <div
      ref={chatRef}
      className='inline h-full p-3 chat'
      onMouseEnter={settings.pauseOnHover ? pause : null}
      onMouseLeave={settings.pauseOnHover ? play : null}
    >
      {chatMessages.map((m, i) => (
        <Message key={i} item={m} />
      ))}
    </div>
  )
}

export default ChatMessages
