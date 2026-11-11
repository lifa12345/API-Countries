import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">🌍 Countries App</Link>
      <div className="navbar-links">
        <Link to="/">Countries</Link>
        <Link to="/create">Create Country</Link>
      </div>
    </nav>
  )
}

export default Navbar