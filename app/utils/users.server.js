import bcrypt from 'bcryptjs'
import { redirect } from '@remix-run/node' // or cloudflare/deno

import Users from '~/models/Users'
import { getSession, commitSession } from '../sessions'

export async function createUser(values, request) {
  const session = await getSession(request.headers.get('Cookie'))

  const exists = await Users.findOne({
    username: values.username,
  })

  if (exists) {
    return { error: 'That username is taken' }
  }

  const hash = await bcrypt.hash(values.password, 10)

  const user = await Users.create({
    username: values.username,
    password: hash,
  })

  session.set('userId', user.id)

  return redirect('/call-center', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  })
}

export async function loginUser(values, request) {
  const session = await getSession(request.headers.get('Cookie'))

  const user = await Users.findOne({
    username: values.username,
  })

  if (!user) {
    return { error: 'Incorrect username or password' }
  }

  const passwordMatch = await bcrypt.compare(values.password, user.password)

  if (!passwordMatch) {
    return { error: 'Incorrect username or password' }
  }

  session.set('userId', user.id)

  return redirect('/call-center', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  })
}

export async function getUser(request) {
  const session = await getSession(request.headers.get('Cookie'))

  if (!session.has('userId')) {
    return redirect('/')
  }

  const userId = session.get('userId')

  const user = await Users.find({
    id: userId,
  })

  return user
}
