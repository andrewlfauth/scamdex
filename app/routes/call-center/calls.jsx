import AddCall from '../../components/calls/AddCall'
import { createCall } from '../../utils/calls.server'
import tmi from 'tmi.js'
import { useEffect, useMemo } from 'react'

export async function action({ request }) {
  const formData = await request.formData()
  const { action, ...values } = Object.fromEntries(formData)

  if (action === 'create') {
    await createCall(values, request)
  }
  return null
}

function Index() {
  const client = useMemo(
    () =>
      new tmi.Client({
        channels: ['kitboga'],
      }),
    []
  )

  useEffect(() => {
    client.on('message', (channel, tags, message, self) => {
      // console.log(`${tags['display-name']}: ${message}`)
      // console.log(message)
      return () => {
        client.disconnect()
      }
    })
  }, [client])

  client.connect()

  return <div className='mt-10'>{/* <AddCall /> */}</div>
}

export default Index
