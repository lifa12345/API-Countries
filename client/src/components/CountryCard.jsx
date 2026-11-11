function CountryCard({ country, onDelete }) {
  return (
    <article className="country-card">
      <img
        className="country-flag"
        src={country.flag}
        alt={`Flag of ${country.name}`}
      />
      <div className="country-body">
        <h2 className="country-name">{country.name}</h2>
        <p className="country-capital">Capital: {country.capital}</p>
        <p className="country-description">{country.description}</p>

        <div className="card-actions">
          <button
            className="btn btn-danger"
            onClick={() => onDelete(country.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  )
}

export default CountryCard