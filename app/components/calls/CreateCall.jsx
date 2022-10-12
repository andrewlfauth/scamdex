import { Form, useTransition } from '@remix-run/react'
import { useEffect, useState, useRef } from 'react'
import { toast } from 'react-toastify'

let personas = [
  {
    _id: 1,
    name: 'Edna',
    memoji:
      'https://res.cloudinary.com/dpnkrz8c8/image/upload/w_50/v1664651994/classroom/Male_Memojis_1_o9vvoj.png',
  },
  {
    _id: 2,
    name: 'John',
    memoji:
      'https://res.cloudinary.com/dpnkrz8c8/image/upload/w_50/v1664651959/classroom/Female_Memojis_1_rc28un.png',
  },
]

function CreateCall() {
  const [persona, setPersona] = useState({})
  const [error, setError] = useState('')
  const formRef = useRef()
  const transition = useTransition()

  useEffect(() => {
    if (error) {
      toast.error(error)
    }
  }, [error])

  useEffect(() => {
    if (persona.name) {
      toast.dismiss()
    }
  }, [persona])

  useEffect(() => {
    if (transition.submission) {
      const inputs = [...formRef.current.elements]
      inputs.forEach((input) => (input.value = ''))
      setPersona({})
    }
  }, [transition.submission])

  return (
    <div className='p-4 rounded-md bg-secondary w-fit'>
      <h2 className='font-semibold text-type-secondary'>New Call</h2>

      <Form ref={formRef} className='mt-6' method='post'>
        <input type='hidden' name='action' value='create' />
        <div className='flex flex-col mt-4'>
          <label
            htmlFor='callName'
            className='mb-2 text-sm text-type-secondary'
          >
            Give this call a name
          </label>
          <input
            type='text'
            required
            name='callName'
            placeholder='ex. Scamazon'
            className='px-4 py-2 text-lg font-semibold text-center rounded-full bg-neutral-800 outline-accent-blue w-60 text-accent-blue placeholder:text-sm placeholder:text-type-secondary placeholder:text-left'
          />
        </div>
        <div className='flex flex-col mt-4'>
          <label
            htmlFor='scamNumber'
            className='mb-2 text-sm text-type-secondary'
          >
            Their phone number
          </label>
          <input
            type='text'
            required
            name='scamNumber'
            className='px-4 py-2 text-lg font-semibold text-center rounded-full bg-neutral-800 outline-accent-blue w-60 text-accent-blue'
          />
        </div>
        <div className='flex flex-col mt-4'>
          <label
            htmlFor='scamCompany'
            className='mb-2 text-sm text-type-secondary'
          >
            Who are they claiming to be?
          </label>
          <input
            type='text'
            required
            name='scamCompany'
            className='px-4 py-2 text-lg font-semibold text-center rounded-full bg-neutral-800 outline-accent-blue w-60 text-accent-blue'
          />
        </div>
        <div className='flex flex-col mt-4'>
          <label className='mb-2 text-sm text-type-secondary'>
            Who will you be?
          </label>
          <input type='hidden' name='persona' value={JSON.stringify(persona)} />
          <div className='flex flex-wrap gap-4'>
            {personas.map((p, i) => (
              <div
                key={i}
                className='cursor-pointer group'
                onClick={() => setPersona(p)}
              >
                <img
                  src={p.memoji}
                  alt=''
                  className={`${
                    persona._id === p._id
                      ? 'scale-[1.1]'
                      : 'group-hover:scale-[1.1]'
                  } w-14`}
                />
                <span
                  className={`${
                    persona._id === p._id
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
              htmlFor='baiterNumber'
              className='mb-2 text-sm text-type-secondary'
            >
              Which phone number will you use?
            </label>
            <input
              type='text'
              name='baiterNumber'
              className='px-4 py-2 text-lg font-semibold text-center rounded-full bg-neutral-800 outline-accent-blue w-60 text-accent-blue'
            />
          </div>
        </div>
        <div className='flex flex-col mt-6'>
          <button
            className='py-3 font-semibold duration-500 rounded-full bg-primary text-accent-blue w-60 hover:bg-accent-blue hover:text-primary'
            type={persona.name ? 'submit' : 'button'}
            onClick={
              persona.name ? null : () => setError('Please select a persona')
            }
          >
            {transition.submission ? 'Saving' : 'Save Call'}
          </button>
        </div>
      </Form>
    </div>
  )
}

export default CreateCall
