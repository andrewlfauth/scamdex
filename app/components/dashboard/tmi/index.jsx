import { useEffect, useState, useReducer } from 'react'
import { useAtom, atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import tmi from 'tmi.js'

import { getMessageHTML } from '~/features/chat'
import Header from './Header'
import ChatMessages from './ChatMessages'
// import usePauseChatOnAlt from '../../hooks/usePauseChatOnAlt'

export const chatSettingsStorageAtom = atomWithStorage('CHAT_SETTINGS', {
  channel: '',
  pauseOnHover: false,
  pauseOnP: false,
})

const client = new tmi.Client({
  channels: ['zackrawrr'],
})

client.connect().catch((err) => console.error(err))

function Index() {
  const [chatMessages, setChatMessages] = useState([])
  const [pausedMessages, setPausedMessages] = useState([])
  const [settings, setSettings] = useAtom(chatSettingsStorageAtom)
  const [channel, setChannel] = useState(settings?.channel)
  const [state, setState] = useState('stopped')

  const controls = {
    play: () => setState('playing'),
    pause: () => setState('paused'),
    stop: () => setState('stopped'),
    clear: () => setChatMessages([]),
  }

  // useEffect(() => {
  //   if (settings.channel) {
  //     setChannel(settings.channel)
  //   }
  // }, [settings.channel])

  // useEffect(() => {
  //   async function a() {
  //     await client.join(channel)
  //     await client.part(client.channels[0])
  //   }

  //   if (channel) {
  //     a()
  //   }
  // }, [channel])

  useEffect(() => {
    if (state === 'playing') {
      if (pausedMessages.length) {
        setChatMessages((old) => [...old, ...pausedMessages])
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
    if (state === 'stopped') {
      client.removeAllListeners()
    }
  }, [state, pausedMessages])

  return (
    <div className='flex flex-col min-w-[350px] max-w-[350px] h-[40vh] rounded-md bg-secondary'>
      {state == 'paused' && <p>Chat paused, {pausedMessages.length}</p>}
      <Header channel={channel} state={state} controls={controls} />
      <ChatMessages
        controls={controls}
        state={state}
        chatMessages={chatMessages}
      />
    </div>
  )
}

export default Index
