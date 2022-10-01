import { useActionData } from '@remix-run/react'

import { createUser, loginUser } from '~/utils/users.server'
import { getSession, commitSession } from '../sessions'
import prisma from '../utils/prisma.server'
import RegisterForm from '~/components/RegisterForm'
import { redirect } from '@remix-run/node'

export async function action({ request }) {
  // const formData = await request.formData()
  // const { action, ...values } = Object.fromEntries(formData)

  // if (action === 'register') {
  //   return createUser(values, request)
  // }

  // if (action === 'login') {
  //   return loginUser(values)
  // }

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

  return (
    <main className='flex flex-col items-center h-screen px-4 sm:px-6 lg:px-8 py-32'>
      <RegisterForm />
      {action?.error && action.error}
    </main>
  )
}
