import PersonaMaker from '../../components/personas/PersonaMaker/index'
import PersonaSlider from '../../components/personas/PersonaSlider/index'
import PersonaTimeStats from '~/components/personas/PersonaTimeStats/index'

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
