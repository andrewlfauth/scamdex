import { useActionData, useTransition } from '@remix-run/react'
import { createUser, loginUser } from '~/utils/users.server'
import { getSession } from '../sessions'
import { redirect } from '@remix-run/node'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

import RegisterForm from '~/components/RegisterForm'

export async function action({ request }) {
  const formData = await request.formData()
  const { action, ...values } = Object.fromEntries(formData)

  if (action === 'register') {
    return createUser(values, request)
  }

  if (action === 'login') {
    return loginUser(values, request)
  }

  return null
}

export async function loader({ request }) {
  const session = await getSession(request.headers.get('Cookie'))

  if (!session.has('userId')) {
    return null
  }

  return redirect('/call-center')
}

export default function Index() {
  const action = useActionData()
  const transition = useTransition()

  useEffect(() => {
    if (action?.error) {
      toast.error(action.error)
    }
  }, [action])

  useEffect(() => {
    if (transition?.location?.pathname === '/call-center') {
      toast.dismiss()
    }
  }, [transition])

  return (
    <main className='flex flex-col items-center h-screen px-4 py-32 sm:px-6 lg:px-8'>
      <RegisterForm />
    </main>
  )
}
