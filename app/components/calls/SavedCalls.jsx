import SavedCallCard from './SavedCallCard'

function SavedCalls({ calls }) {
  return (
    <div className='mr-44'>
      {calls.map((call) => (
        <SavedCallCard key={call} call={call} />
      ))}
    </div>
  )
}

export default SavedCalls
