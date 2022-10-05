import { useEffect, useState } from 'react'

import { startChat, getMessageHTML } from '~/features/chat'
import Header from './Header'
import Message from './Message'

function Index() {
  const user = { channel: 'hasanabi' } // will come form loader
  // const user = useLoaderData

  const [channel, setChannel] = useState(user?.channel) // loader
  const [listening, setListening] = useState(false)
  const [chatMessages, setChatMessages] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (listening && !chatMessages.length) {
      return setLoading(true)
    }
    setLoading(false)
  }, [chatMessages, listening])

  useEffect(() => {
    if (channel && listening) {
      let clientPromise = startChat(channel)

      clientPromise.then((c) => {
        c.on('message', (channel, tags, message) => {
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
      })

      return () => clientPromise.then((c) => c.disconnect())
    }
  }, [channel, listening])

  return (
    <div className='flex flex-col min-w-[350px] max-w-[350px] rounded-md bg-secondary'>
      <Header
        channel={user.channel}
        listening={listening}
        loading={loading}
        start={() => setListening(true)}
        stop={() => setListening(false)}
        clear={() => setChatMessages([])}
      />

      <div className='inline h-full p-3 chat'>
        {chatMessages.map((m, i) => (
          <Message key={i} item={m} />
        ))}
      </div>
    </div>
  )
}

export default Index
