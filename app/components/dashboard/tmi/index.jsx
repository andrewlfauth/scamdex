import { useEffect, useState, useReducer } from 'react'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import tmi from 'tmi.js'

import { getMessageHTML } from '~/features/chat'
import Header from './Header'
import ChatMessages from './ChatMessages'

export const chatSettingsStorageAtom = atomWithStorage('CHAT_SETTINGS', {
  channel: '',
  pauseOnHover: false,
  pauseOnP: false,
  buffer: false,
})

const client = new tmi.Client({
  channels: ['kitboga'],
})

client.connect().catch((err) => console.error(err))

function Index() {
  const [state, setState] = useState('stopped')
  const [chatMessages, setChatMessages] = useState([])
  const [pausedMessages, setPausedMessages] = useState([])
  const [bufferedMessages, setBufferedMessages] = useState([])
  const [settings] = useAtom(chatSettingsStorageAtom)
  const [channel, setChannel] = useState(settings?.channel)

  const controls = {
    play: () => setState('playing'),
    pause: () => setState('paused'),
    stop: () => setState('stopped'),
    buffer: () => setState('buffered'),
    clear: () => setChatMessages([]),
  }

  const reducer = (state, action) => {
    if (action.type === 'buff') {
      setChatMessages((old) => [...old, ...bufferedMessages])
      setBufferedMessages([])
    }
  }

  const [, dispatch] = useReducer(reducer)

  useEffect(() => {
    if (settings.buffer) {
      let id = setInterval(() => {
        dispatch({ type: 'buff' })
      }, 2000)

      return () => clearInterval(id)
    }
  }, [settings.buffer])

  useEffect(() => {
    if (settings.channel) {
      setChannel(settings.channel)
    }
  }, [settings.channel])

  useEffect(() => {
    async function changeChannel() {
      await client.join(channel)
      await client.part(client.channels[0])
      await client.clear(client.channels[0])
    }

    if (channel) {
      changeChannel()
    }
  }, [channel])

  useEffect(() => {
    // Buffer
    if (settings.buffer) {
      client.removeAllListeners()
      if (state === 'playing') {
        if (pausedMessages.length) {
          setChatMessages((old) => [...old, ...pausedMessages])
        }

        client.on('message', (channel, tags, message) => {
          setBufferedMessages((old) => [
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
      }
    } else {
      if (state === 'playing') {
        client.removeAllListeners()

        if (pausedMessages.length) {
          setChatMessages((old) => [...old, ...pausedMessages])
          setPausedMessages([])
        }

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
      }

      if (state === 'paused') {
        client.removeAllListeners()
        client.on('message', (channel, tags, message) => {
          setPausedMessages((old) => [
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
      }
    }

    if (state === 'stopped') {
      client.removeAllListeners()
    }
  }, [state, pausedMessages, settings])

  return (
    <div className='flex flex-col min-w-[350px] max-w-[350px] h-full rounded-md bg-secondary relative'>
      <Header
        channel={channel}
        pausedMessages={pausedMessages}
        state={state}
        controls={controls}
      />
      <ChatMessages
        controls={controls}
        state={state}
        chatMessages={chatMessages}
      />
    </div>
  )
}

export default Index
