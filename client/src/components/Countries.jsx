import { useEffect, useState } from 'react'
import axios from 'axios'
import CountryCard from './CountryCard.jsx'

const API_URL =
  'https://6aeb882aee39618d7bf868ff.mockapi.io/api/cohort-se-c3-p/countries'

function Countries() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await axios.get(API_URL)
        setCountries(res.data)
      } catch (err) {
        setError('Failed to load countries.')
      } finally {
        setLoading(false)
      }
    }
    fetchCountries()
  }, [])

  // 1. Send DELETE to the API
  // 2. If it succeeds, remove the country from state
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`)
      setCountries((prev) => prev.filter((c) => c.id !== id))
    } catch (err) {
      console.error('Delete failed:', err)
      alert('Could not delete the country. Please try again.')
    }
  }

  if (loading) return <p>Loading countries…</p>
  if (error) return <p>{error}</p>
  if (countries.length === 0) return <p>No countries yet. Go add one!</p>

  return (
    <div className="country-grid">
      {countries.map((country) => (
        <CountryCard
          key={country.id}
          country={country}
          onDelete={handleDelete}
        />
      ))}
    </div>
  )
}

export default Countries