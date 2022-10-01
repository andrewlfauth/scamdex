import { Form, useTransition } from '@remix-run/react'
import { useState, useRef } from 'react'
import { toast } from 'react-toastify'

function RegisterForm() {
  const transition = useTransition()
  const [action, setAction] = useState('login')
  const formRef = useRef()

  const handleSubmit = (e) => {
    const inputs = [...formRef.current.elements]
    const p1 = inputs[2]
    const p2 = inputs[3]

    if (p1.value !== p2.value) {
      e.preventDefault()
      toast.error("Passwords don't match")
    }
  }

  return (
    <Form
      ref={formRef}
      onSubmit={action === 'signup' ? handleSubmit : ''}
      method='post'
      className='w-full md:w-[500px] p-10 border flex flex-col items-center'
    >
      {/* {invalidPw && (
        <Toast title='Woops!' subtitle="Passwords don't match" type='error' />
      )} */}
      <input
        type='hidden'
        name='action'
        value={action === 'login' ? 'login' : 'register'}
      />
      <h1 className='self-start mb-4 text-3xl font-semibold'>
        {action === 'login' ? 'Sign In' : 'Sign Up'}
      </h1>
      <div className='flex flex-col w-full'>
        <label htmlFor='username' className='font-semibold text-blue-500'>
          Username
        </label>
        <input
          type='text'
          required
          name='username'
          className='p-2 border-2 rounded outline-blue-500'
        />
      </div>
      <div className='flex flex-col w-full mt-4'>
        <label htmlFor='username' className='font-semibold text-blue-500'>
          Password
        </label>
        <input
          required
          type='password'
          name='password'
          className='p-2 border-2 rounded outline-blue-500'
        />
      </div>
      {action === 'signup' && (
        <div className='flex flex-col w-full mt-4'>
          <label htmlFor='confirm' className='font-semibold text-blue-500'>
            Confirm password
          </label>
          <input
            required
            type='password'
            name='confirm'
            className='p-2 border-2 rounded outline-blue-500'
          />
        </div>
      )}
      <button
        type='submit'
        className='py-2 mt-6 mb-4 text-lg font-semibold rounded bg-fuchsia-500 text-white w-44'
      >
        {transition.state === 'idle'
          ? action === 'login'
            ? 'Sign In'
            : 'Sign Up'
          : 'Loading...'}
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
