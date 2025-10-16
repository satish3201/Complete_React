import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './page/Login'
import Home from './page/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
