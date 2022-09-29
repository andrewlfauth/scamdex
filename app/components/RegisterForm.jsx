import { Form } from '@remix-run/react'
import { useState } from 'react'

function RegisterForm() {
  const [action, setAction] = useState('login')

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
      <h1 className='text-3xl font-semibold mb-4 text-emerald-300 self-start'>
        {action === 'login' ? 'Sign In' : 'Sign Up'}
      </h1>
      <div className='flex flex-col w-full'>
        <label htmlFor='username' className='text-purple-600 font-semibold'>
          Username
        </label>
        <input
          type='text'
          required
          name='username'
          className='rounded border-2 p-2 outline-purple-600'
        />
      </div>
      <div className='flex flex-col w-full mt-4'>
        <label htmlFor='username' className='text-purple-600 font-semibold'>
          Password
        </label>
        <input
          required
          type='password'
          name='password'
          className='rounded border-2 p-2 outline-purple-600'
        />
      </div>
      <button
        type='submit'
        className='bg-emerald-300 font-semibold text-lg text-neutral-800 rounded mt-6 mb-4 py-2 w-44'
      >
        {action === 'login' ? 'Sign In' : 'Sign Up'}
      </button>

      {action === 'login' ? (
        <div>
          <span>
            New here?{' '}
            <span
              className='cursor-pointer font-semibold text-blue-500'
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
              className='cursor-pointer font-semibold text-blue-500'
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
