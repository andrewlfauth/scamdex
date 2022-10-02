import AddCall from '../../components/calls/AddCall'
import { createCall } from '../../utils/calls.server'

export async function action({ request }) {
  const formData = await request.formData()
  const { action, ...values } = Object.fromEntries(formData)

  if (action === 'create') {
    await createCall(values, request)
  }
  return null
}

function Index() {
  return (
    <div className='mt-10'>
      <AddCall />
    </div>
  )
}

export default Index
