import { redirect } from '@remix-run/node'
import cloudinary from 'cloudinary'

import { getSession } from '../sessions'
import Personas from '../models/Personas'
import Users from '../models/Users'

export async function createPersona(request, values) {
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

  await cloudinary.v2.uploader
    .upload(values.audio, {
      folder: 'bait-tracker/persona',
      resource_type: 'auto',
    })
    .then((res) => (values.audio = res.url))
    .catch((e) => console.error(e))

  await Personas.create({
    name: values.name,
    age: values.age,
    memoji: values.memoji,
    audio: values.audio,
    bio: values.bio,
    userId,
  })
}

export async function getUsersPersonas(request) {
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

  const usersPersonas = await Personas.find({ userId })

  return usersPersonas
}
