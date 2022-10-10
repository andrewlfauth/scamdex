import SavedCallCard from './SavedCallCard'

const calls = [
  {
    id: 'call1',
    name: 'Scamzon',
    scamCompany: 'Amazon',
    scamNumber: '1-800-222-3343',
    persona: {
      name: 'Edna',
      memoji:
        'https://res.cloudinary.com/dpnkrz8c8/image/upload/w_50/v1664651994/classroom/Male_Memojis_1_o9vvoj.png',
    },
    baiterNumber: '426-394-3230',
  },
]

function SavedCalls() {
  return (
    <div className='mr-44'>
      {calls.map((call) => (
        <SavedCallCard key={call} call={call} />
      ))}
    </div>
  )
}

export default SavedCalls
