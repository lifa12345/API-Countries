import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Countries from './components/Countries.jsx'
import CreateCountry from './components/CreateCountry.jsx'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/create" element={<CreateCountry />} />
        </Routes>
      </main>
    </>
  )
}

export default App