import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const API_URL =
  'https://6aeb882aee39618d7bf868ff.mockapi.io/api/cohort-se-c3-p/countries'

function CreateCountry() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    flag: '',
    capital: '',
    description: '',
  })

  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      await axios.post(API_URL, formData)
      navigate('/')
    } catch (err) {
      setError('Could not create country. Please try again.')
      setSubmitting(false)
    }
  }

  return (
    <div className="form-wrapper">
      <h1 className="form-title">Create Country</h1>

      <form className="country-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Tunisia"
            required
          />
        </label>

        <label>
          Flag URL
          <input
            type="url"
            name="flag"
            value={formData.flag}
            onChange={handleChange}
            placeholder="https://flagcdn.com/w320/tn.png"
            required
          />
        </label>

        <label>
          Capital
          <input
            type="text"
            name="capital"
            value={formData.capital}
            onChange={handleChange}
            placeholder="e.g. Tunis"
            required
          />
        </label>

        <label>
          Description
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            placeholder="A short description of the country…"
            required

          />
        </label>

        {error && <p className="form-error">{error}</p>}

        <div className="form-actions">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={submitting}
          >
            {submitting ? 'Creating…' : 'Create Country'}
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate('/')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateCountry;