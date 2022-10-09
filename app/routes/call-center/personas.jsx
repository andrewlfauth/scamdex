import PersonaMaker from '../../components/personas/PersonaMaker/index'
import PersonaSlider from '../../components/personas/PersonaSlider/index'
import PersonaTimeStats from '~/components/personas/PersonaTimeStats/index'
import TopPerformingPersonas from '~/components/personas/TopPerformingPersonas/index'

function Index() {
  return (
    <div>
      <h1 className='text-lg font-semibold text-type-primary'>Personas</h1>
      <p className='mt-1 text-sm text-type-secondary'>
        Manage you scambait personas.
      </p>

      <div className='flex mt-4'>
        <TopPerformingPersonas />
        {/* <PersonaSlider /> */}
        {/* <PersonaTimeStats /> */}
        {/* <PersonaMaker /> */}
      </div>
    </div>
  )
}

export default Index
