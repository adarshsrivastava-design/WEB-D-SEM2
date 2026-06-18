import { useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

type FormData = {
  name: string
  email: string
  password: string
}

const initialFormData: FormData = {
  name: '',
  email: '',
  password: '',
}

function App() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [message, setMessage] = useState('')

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((currentData) => ({
      ...currentData,
      [field]: value,
    }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setMessage(`Registration completed for ${formData.name}.`)
    setFormData(initialFormData)
  }

  return (
    <div className="app">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(event) => updateField('name', event.target.value)}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(event) => updateField('email', event.target.value)}
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={(event) => updateField('password', event.target.value)}
            required
          />
        </label>

        <button type="submit">Register</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  )
}

export default App
