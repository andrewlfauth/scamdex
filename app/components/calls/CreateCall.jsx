import { Form } from '@remix-run/react'
import { useState } from 'react'

let personas = [
  {
    id: 1,
    name: 'Edna',
    memoji:
      'https://res.cloudinary.com/dpnkrz8c8/image/upload/w_50/v1664651994/classroom/Male_Memojis_1_o9vvoj.png',
  },
  {
    id: 2,
    name: 'John',
    memoji:
      'https://res.cloudinary.com/dpnkrz8c8/image/upload/w_50/v1664651959/classroom/Female_Memojis_1_rc28un.png',
  },
]

function CreateCall() {
  const [persona, setPersona] = useState()

  return (
    <div className='bg-secondary rounded-md p-4 w-fit'>
      <h2 className='font-semibold text-type-secondary'>New Call</h2>

      <Form className='mt-6' method='post'>
        <input type='hidden' name='action' value='create' />
        <div className='flex flex-col mt-4'>
          <label
            htmlFor='scam-number'
            className='text-type-secondary text-sm mb-2'
          >
            Give this call a name
          </label>
          <input
            type='text'
            name='call-name'
            placeholder='ex. Scamazon'
            className='bg-neutral-800 rounded-full outline-accent-blue px-4 py-2 w-60 text-lg font-semibold text-accent-blue text-center placeholder:text-sm placeholder:text-type-secondary placeholder:text-left'
          />
        </div>
        <div className='flex flex-col mt-4'>
          <label
            htmlFor='scam-number'
            className='text-type-secondary text-sm mb-2'
          >
            Their phone number
          </label>
          <input
            type='text'
            name='scam-number'
            className='bg-neutral-800 rounded-full outline-accent-blue px-4 py-2 w-60 text-lg font-semibold text-accent-blue text-center'
          />
        </div>
        <div className='flex flex-col mt-4'>
          <label
            htmlFor='scam-company'
            className='text-type-secondary text-sm mb-2'
          >
            Who are they claiming to be?
          </label>
          <input
            type='text'
            name='scam-company'
            className='bg-neutral-800 rounded-full outline-accent-blue px-4 py-2 w-60 text-lg font-semibold text-accent-blue text-center'
          />
        </div>
        <div className='flex flex-col mt-4'>
          <label className='text-type-secondary text-sm mb-2'>
            Who will you be?
          </label>
          <div className='flex flex-wrap gap-4'>
            {personas.map((p, i) => (
              <div
                key={i}
                className='group cursor-pointer'
                onClick={() => setPersona(p.id)}
              >
                <img
                  src={p.memoji}
                  alt=''
                  className={`${
                    persona === p.id ? 'scale-[1.1]' : 'group-hover:scale-[1.1]'
                  } w-14`}
                />
                <span
                  className={`${
                    persona === p.id
                      ? 'text-accent-blue'
                      : 'text-type-secondary group-hover:text-accent-blue'
                  } block text-center font-semibold  -mt-2`}
                >
                  {p.name}
                </span>
              </div>
            ))}
          </div>
          <div className='flex flex-col mt-4'>
            <label
              htmlFor='company'
              className='text-type-secondary text-sm mb-2'
            >
              Which phone number will you use?
            </label>
            <input
              type='text'
              name='baiter-number'
              className='bg-neutral-800 rounded-full outline-accent-blue px-4 py-2 w-60 text-lg font-semibold text-accent-blue text-center'
            />
          </div>
        </div>
        <div className='flex flex-col mt-6'>
          <button
            className='bg-primary rounded-full font-semibold text-accent-blue py-3 w-60 hover:bg-accent-blue hover:text-primary duration-500'
            onClick={() => console.log('PPp')}
          >
            Save Call
          </button>
        </div>
      </Form>
    </div>
  )
}

export default CreateCall
