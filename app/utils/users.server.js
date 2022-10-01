import bcrypt from 'bcryptjs'
import { json, redirect } from '@remix-run/node' // or cloudflare/deno

import { prisma } from './prisma.server'
import { getSession, commitSession } from '../sessions'

// export async function createUser(values, request) {
//   const session = await getSession(request.headers.get('Cookie'))
//   if (session.has('userId')) {
//     return redirect('/call-center')
//   }

//   const exists = await prisma.User.count({
//     where: { username: values.username },
//   })

//   if (exists) {
//     return { error: 'That username is taken' }
//   }

//   const hash = await bcrypt.hash(values.password, 10)

//   const user = await prisma.User.create({
//     data: {
//       username: values.username,
//       password: hash,
//     },
//   })

//   session.set('userId', user.id)

//   return redirect('/call-center', {
//     headers: {
//       'Set-Cookie': await commitSession(session),
//     },
//   })
// }

// export async function loginUser(values) {
//   const user = await prisma.User.findUnique({
//     where: {
//       username: values.username,
//     },
//   })

//   return null
// }

// export async function getUser() {}
