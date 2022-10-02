import PersonaMaker from '../../components/personas/PersonaMaker/index'

function Index() {
  return (
    <div>
      <h1 className='text-lg font-semibold text-type-primary'>Personas</h1>
      <p className='mt-1 text-sm text-type-secondary'>
        Manage you scambait personas.
      </p>

      <div className='mt-4'>
        <PersonaMaker />
      </div>
    </div>
  )
}

export default Index
