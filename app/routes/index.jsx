import { redirect } from '@remix-run/node'
import RegisterForm from '~/components/RegisterForm'
import { createUser } from '~/utils/users.server'
import { useActionData } from '@remix-run/react'

export async function action({ request }) {
  const formData = await request.formData()
  const { action, ...values } = Object.fromEntries(formData)

  if (action === 'register') {
    const data = await createUser(values)

    return data.error ? data.error : redirect('/call-center')
  }
}

export default function Index() {
  const error = useActionData()

  return (
    <main className='flex items-center justify-center h-screen px-4 sm:px-6 lg:px-8'>
      {error && error}
      <RegisterForm />
    </main>
  )
}
