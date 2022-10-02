import PersonaMaker from '../../components/personas/PersonaMaker/PersonaMaker'

function Index() {
  return (
    <div>
      <h1 className='text-lg font-semibold text-type-primary'>Personas</h1>
      <p className='text-sm text-type-secondary mt-1'>
        Manage you scambait personas.
      </p>

      <div className='mt-4'>
        <PersonaMaker />
      </div>
    </div>
  )
}

export default Index
