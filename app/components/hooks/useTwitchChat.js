import { useState, useEffect } from 'react'
import tmi from 'tmi.js'

import { getMessageHTML } from '../../features/chat'

export default function useTwitchChat(client) {
  const [playChat, setPlayChat] = useState(false)
  const [chatMessages, setChatMessages] = useState([])

  useEffect(() => {
    if (playChat) {
      client.on('message', (channel, tags, message) => {
        setChatMessages((old) => [
          ...old,
          {
            user: {
              name: tags['display-name'],
              color: tags.color || 'hotpink',
            },
            message: getMessageHTML(message, tags),
          },
        ])
      })
    } else {
      client.removeAllListeners()
    }
  }, [playChat, client])

  return { playChat, setPlayChat, chatMessages, setChatMessages }
}
