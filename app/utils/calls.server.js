import { redirect } from '@remix-run/node'

import { getSession } from '../sessions'
import Users from '../models/Users'
import Calls from '../models/Calls'

export async function createCall(request, values) {
  const session = await getSession(request.headers.get('Cookie'))

  if (!session.has('userId')) {
    return redirect('/auth')
  }

  const user = await Users.findOne({
    id: session.userId,
  })

  if (!user) {
    return redirect('/auth')
  }

  const userId = user._id.toString()

  await Calls.create({
    name: values.callName,
    scamNumber: values.scamNumber,
    scamCompany: values.scamCompany,
    persona: JSON.parse(values.persona),
    baiterNumber: values.baiterNumber,
    userId,
  })
}

export async function getUsersCalls(request) {
  const session = await getSession(request.headers.get('Cookie'))

  if (!session.has('userId')) {
    return redirect('/auth')
  }

  const user = await Users.findOne({
    id: session.userId,
  })

  if (!user) {
    return redirect('/auth')
  }

  const userId = user._id.toString()

  const calls = await Calls.find({ userId })

  return calls
}

export async function addScammerName(values) {
  const updatedActiveCall = await Calls.findOneAndUpdate(
    { _id: values.callId },
    {
      $push: { scammerName: values.scammerName },
    },
    {
      new: true,
    }
  )

  return updatedActiveCall
}
