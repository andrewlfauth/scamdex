import { Form, useTransition } from '@remix-run/react'
import { useEffect, useRef } from 'react'

import AgeInput from './AgeInput'
import NameInput from './NameInput'
import MemojiInput from './MemojiInput'
import BioInput from './BioInput'
import AudioRecorder from '../../audio_recorder/index'

function PersonaMaker() {
  const transition = useTransition()
  const formRef = useRef()

  useEffect(() => {
    if (transition.state === 'submitting') {
      const inputs = [...formRef.current.elements]
      inputs.forEach((i) => {
        if (i.name !== 'action') {
          i.value = ''
        }
      })
    }
  }, [transition])

  return (
    <div className='bg-secondary w-[300px] rounded-md p-4'>
      <h2 className='mb-4 text-type-primary'>Persona Factory</h2>
      <Form
        ref={formRef}
        method='post'
        action='/call-center/personas'
        className='flex flex-col'
      >
        <div className='flex space-x-6'>
          <NameInput />
          <AgeInput />
        </div>
        <MemojiInput />
        <AudioRecorder />
        <BioInput />
        <button
          type='submit'
          name='action'
          value='create'
          className='self-end px-6 py-2 mt-6 text-sm font-semibold duration-200 rounded-md bg-accent-purple text-secondary hover:ring-2 ring-offset-2 ring-offset-secondary ring-accent-purple w-fit'
        >
          {transition.state === 'idle' ? 'Create' : 'Saving'}
        </button>
      </Form>
    </div>
  )
}

export default PersonaMaker
