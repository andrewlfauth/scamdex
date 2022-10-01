import { redirect } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { getSession, commitSession } from '../sessions'
import { prisma } from '../utils/prisma.server'

export async function loader({ request }) {
  const session = await getSession(request.headers.get('Cookie'))

  if (!session.has('userId')) {
    return redirect('/')
  }

  const userId = session.get('userId')

  const user = await prisma.User.findUnique({
    where: {
      id: userId,
    },
  })

  return user
}

function Index() {
  const user = useLoaderData()

  return <div>Call Center for {user.username}</div>
}

export default Index
