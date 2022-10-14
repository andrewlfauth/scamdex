import cloudinary from 'cloudinary'

import PersonaMaker from '../../components/personas/PersonaMaker/index'
import PersonaSlider from '../../components/personas/PersonaSlider/index'
import PersonaTimeStats from '~/components/personas/PersonaTimeStats/index'
import test from '../../test.png'

export async function action({ request }) {
  const formData = await request.formData()
  const { ...values } = Object.fromEntries(formData)
  console.log(values)
  // await cloudinary.v2.uploader
  //   .upload('./app/test.png', {
  //     public_id: 'bait-tracker/persona/test',
  //     resource_type: 'auto',
  //   })
  //   .then((r) => console.log(r))
  //   .catch((e) => console.log(e))
  return null
}

function Index() {
  return (
    <div>
      <h1 className='text-lg font-semibold text-type-primary'>Personas</h1>

      <div className='flex space-x-20'>
        <PersonaSlider />
      </div>
      <PersonaMaker />
      {/* <PersonaTimeStats /> */}
    </div>
  )
}

export default Index
