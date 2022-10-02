import { Form } from '@remix-run/react'

import AgeInput from './AgeInput'
import NameInput from './NameInput'
import MemojiInput from './MemojiInput'
import BioInput from './BioInput'

function PersonaMaker() {
  return (
    <div className='bg-secondary w-[340px] rounded-md p-3'>
      <h2 className='text-type-primary mb-4'>Persona Factory</h2>
      <Form method='post' className='flex flex-col'>
        <div className='flex space-x-6'>
          <NameInput />
          <AgeInput />
        </div>
        <MemojiInput />
        <BioInput />
        <button
          type='submit'
          className='bg-accent-purple py-2 rounded-md text-secondary text-sm px-6 mt-6 hover:ring-2 ring-offset-2 ring-offset-secondary duration-200 ring-accent-purple w-fit self-end font-semibold'
        >
          Create
        </button>
      </Form>
    </div>
  )
}

export default PersonaMaker
