import PersonaMaker from '../../components/personas/PersonaMaker/index'
import PersonaSlider from '../../components/personas/PersonaSlider/index'
import PersonaTimeStats from '~/components/personas/PersonaTimeStats/index'
import { createPersona, getUsersPersonas } from '~/utils/personas.server'
import { useLoaderData } from '@remix-run/react'

export async function action({ request }) {
  const formData = await request.formData()
  const { action, ...values } = Object.fromEntries(formData)

  if (action === 'create') {
    await createPersona(request, values)
    return null
  }
  return null
}

export async function loader({ request }) {
  let usersPersonas = await getUsersPersonas(request)
  console.log(usersPersonas)
  return usersPersonas
}

function Index() {
  let allPersonas = useLoaderData()

  return (
    <div>
      <h1 className='text-lg font-semibold text-type-primary'>Personas</h1>
      <div className='flex space-x-20'>{/* <PersonaSlider /> */}</div>
      <PersonaMaker />
      {/* <PersonaTimeStats /> */}
    </div>
  )
}

export default Index
