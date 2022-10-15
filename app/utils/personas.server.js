import { redirect } from '@remix-run/node'
import cloudinary from 'cloudinary'

import { getSession } from '../sessions'
import Personas from '../models/Personas'
import Users from '../models/Users'

export async function createPersona(request, values) {
  await cloudinary.v2.uploader
    .upload(values.audio, {
      public_id: 'bait-tracker/persona/test',
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
  })
}
