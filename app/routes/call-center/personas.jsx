import PersonaMaker from '../../components/personas/PersonaMaker/index'
import PersonaSlider from '../../components/personas/PersonaSlider/index'
import PersonaTimeStats from '~/components/personas/PersonaTimeStats/index'
import { createPersona, getUsersPersonas } from '~/utils/personas.server'
import { useLoaderData, useActionData } from '@remix-run/react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

export async function action({ request }) {
  const formData = await request.formData()
  const { action, ...values } = Object.fromEntries(formData)

  if (action === 'create') {
    const personaName = await createPersona(request, values)
    return personaName
  }
  return null
}

export async function loader({ request }) {
  let usersPersonas = await getUsersPersonas(request)
  return usersPersonas
}

function Index() {
  const action = useActionData()
  let usersPersonas = useLoaderData()

  useEffect(() => {
    if (action) {
      toast.success(`Created new persona: ${action}`)
    }
  }, [action])

  return (
    <div>
      <h1 className='text-lg font-semibold text-type-primary'>Personas</h1>
      <div className='flex space-x-20'>
        <PersonaSlider personas={usersPersonas} />
        <PersonaMaker />
      </div>
      {/* <PersonaTimeStats /> */}
    </div>
  )
}

export default Index
