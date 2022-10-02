import { Form } from '@remix-run/react'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

function AddCallForm({ closeForm }) {
  const [character, setCharacter] = useState(0)
  const srcs = [
    'https://res.cloudinary.com/dpnkrz8c8/image/upload/w_20/v1664651990/classroom/Male_Memojis_jzacb4.png',
    'https://res.cloudinary.com/dpnkrz8c8/image/upload/w_20/v1664651994/classroom/Male_Memojis_1_o9vvoj.png',
    'https://res.cloudinary.com/dpnkrz8c8/image/upload/w_20/v1664651962/classroom/Female_Memojis_dkwxqr.png',
    'https://res.cloudinary.com/dpnkrz8c8/image/upload/w_20/v1664651959/classroom/Female_Memojis_1_rc28un.png',
  ]

  return (
    <Form
      method='post'
      className='relative flex flex-col p-4 space-y-2 rounded shadow w-fit'
    >
      <AiOutlineClose
        onClick={closeForm}
        className='absolute cursor-pointer top-2 right-2'
      />
      <input type='hidden' name='character' value={srcs[character]} />
      <input type='hidden' name='action' value='create' />
      <h3 className='text-lg font-semibold tracking-tight'>
        Start new scambait
      </h3>
      <label htmlFor='call-name'>Name the call</label>
      <input type='text' name='call-name' placeholder='ex. Starlight' />
      <label htmlFor='call-character'>Choose a character</label>
      <div className='flex'>
        <img
          src={srcs[0]}
          alt=''
          onClick={() => setCharacter(0)}
          className='cursor-pointer'
        />
        <img
          src={srcs[1]}
          alt=''
          onClick={() => setCharacter(1)}
          className='cursor-pointer'
        />
        <img
          src={srcs[2]}
          alt=''
          onClick={() => setCharacter(2)}
          className='cursor-pointer'
        />
        <img
          src={srcs[3]}
          alt=''
          onClick={() => setCharacter(3)}
          className='cursor-pointer'
        />
      </div>

      <h4 className='text-lg font-semibold tracking-tight'>Scam Details</h4>

      <label htmlFor='scam-company'>Who are they pretending to be?</label>
      <input type='text' name='scam-company' placeholder='ex. Amazon' />
      <label htmlFor='scam-number'>What number are they using?</label>
      <input type='text' name='scam-number' placeholder='ex. 1-888-123-4567' />

      <button
        type='submit'
        className='w-full py-2 font-semibold rounded bg-emerald-500'
      >
        Create
      </button>
    </Form>
  )
}

export default AddCallForm
