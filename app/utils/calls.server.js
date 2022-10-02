import { redirect } from '@remix-run/node'
// import { prisma } from './prisma.server'
import { PrismaClient } from '@prisma/client'

import { getSession } from '../sessions'

const prisma = new PrismaClient()

export async function createCall(values, request) {
  const session = await getSession(request.headers.get('Cookie'))

  if (!session.has('userId')) {
    return redirect('/auth')
  }

  const user = await prisma.User.findFirst({
    where: {
      id: session.userId,
    },
  })

  if (!user) {
    return redirect('/auth')
  }

  let a = await prisma.Call.findFirst()
  console.log(a)
}
