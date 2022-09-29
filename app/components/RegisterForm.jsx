import { Form } from '@remix-run/react'
import { useState } from 'react'

import useShowLoadingAfterDelay from './hooks/useShowLoadingAfterDelay'

function RegisterForm() {
  const [action, setAction] = useState('login')

  useShowLoadingAfterDelay(
    action === 'login'
      ? 'Connecting to secure server'
      : 'Handling each and everything'
  )

  return (
    <Form
      method='post'
      className='w-full md:w-[600px] p-10 border flex flex-col items-center'
    >
      <input
        type='hidden'
        name='action'
        value={action === 'login' ? 'login' : 'register'}
      />
      <h1 className='self-start mb-4 text-3xl font-semibold text-emerald-300'>
        {action === 'login' ? 'Sign In' : 'Sign Up'}
      </h1>
      <div className='flex flex-col w-full'>
        <label htmlFor='username' className='font-semibold text-purple-600'>
          Username
        </label>
        <input
          type='text'
          required
          name='username'
          className='p-2 border-2 rounded outline-purple-600'
        />
      </div>
      <div className='flex flex-col w-full mt-4'>
        <label htmlFor='username' className='font-semibold text-purple-600'>
          Password
        </label>
        <input
          required
          type='password'
          name='password'
          className='p-2 border-2 rounded outline-purple-600'
        />
      </div>
      <button
        type='submit'
        className='py-2 mt-6 mb-4 text-lg font-semibold rounded bg-emerald-300 text-neutral-800 w-44'
      >
        {action === 'login' ? 'Sign In' : 'Sign Up'}
      </button>

      {action === 'login' ? (
        <div>
          <span>
            New here?{' '}
            <span
              className='font-semibold text-blue-500 cursor-pointer'
              onClick={() => setAction('signup')}
            >
              Sign Up
            </span>
          </span>
        </div>
      ) : (
        <div>
          <span>
            Already have an account?{' '}
            <span
              className='font-semibold text-blue-500 cursor-pointer'
              onClick={() => setAction('login')}
            >
              Sign In
            </span>
          </span>
        </div>
      )}
    </Form>
  )
}

export default RegisterForm
