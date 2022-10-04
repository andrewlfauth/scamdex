import PersonaMaker from '../../components/personas/PersonaMaker/index'
import PersonaSlider from '../../components/personas/PersonaSlider/index'
import PersonaTimeStats from '~/components/personas/PersonaTimeStats/index'

function Index() {
  return (
    <div>
      <h1 className='text-lg font-semibold text-type-primary'>Personas</h1>
      <p className='mt-1 text-sm text-type-secondary'>
        Manage you scambait personas.
      </p>

      <div className='grid grid-cols-2 gap-4 mt-4'>
        {/* <PersonaMaker />
        <PersonaSlider /> */}
        <PersonaTimeStats />
      </div>
    </div>
  )
}

export default Index
