import { Form } from '@remix-run/react'
import { useState } from 'react'

import AgeInput from './AgeInput'
import ALL_MEMOJIS from '../../data/characterSrcs'

function CharacterMaker() {
  const [imgIdx, setImgIdx] = useState()

  return (
    <div className='bg-secondary w-[340px] rounded-md p-3'>
      <h2 className='text-type-primary mb-4'>Persona Factory</h2>
      <Form method='post' className='flex flex-col'>
        <div className='flex space-x-6'>
          <div className='flex flex-col w-[70%]'>
            <label
              htmlFor='character-name'
              className='text-type-secondary text-sm'
            >
              Name
            </label>
            <input
              type='text'
              name='character-name'
              className='border-b border-type-secondary bg-transparent outline-none focus:border-b-2 focus:border-accent-purple active:border-accent-purple caret-accent-purple text-type-white pb-1 px-2'
            />
          </div>

          <AgeInput />
        </div>
        <span className='block text-sm text-type-secondary mt-4'>
          Choose memoji
        </span>

        <div className='grid mt-2 grid-cols-4 gap-2'>
          {ALL_MEMOJIS.map((s, i) => (
            <img
              key={s}
              src={s}
              alt=''
              onClick={() => setImgIdx(i)}
              className={`${
                imgIdx === i ? 'scale-[1.1] border-b border-accent-purple' : ''
              } cursor-pointer hover:scale-[1.1]`}
            />
          ))}
        </div>

        <div className='flex flex-col mt-2'>
          <label
            htmlFor='character-bio'
            className='text-type-secondary text-sm mb-2'
          >
            Persona Bio
          </label>
          <textarea
            name='charact-bio'
            cols='20'
            rows='3'
            placeholder='ex. Edna is 82 and enjoys mayonaise and bathtubs.'
            className='border border-type-secondary bg-transparent rounded-md outline-accent-purple text-sm caret-accent-purple p-2 text-type-white placeholder:text-xs placeholder:text-type-secondary'
          ></textarea>
        </div>

        <button
          type='submit'
          className='bg-accent-purple py-2 rounded-md text-secondary text-sm px-6 mt-6 hover:ring-2 ring-offset-2 ring-offset-secondary duration-200 ring-accent-purple w-fit self-end'
        >
          Create
        </button>
      </Form>
    </div>
  )
}

export default CharacterMaker
