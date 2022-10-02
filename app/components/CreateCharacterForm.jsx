import { Form } from '@remix-run/react'

function CreateCharacterForm() {
  return (
    <Form method='post'>
      <h3>Create a character</h3>
      <label htmlFor='name'>Name</label>
      <input type='text' name='name' />
    </Form>
  )
}

export default CreateCharacterForm
