import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Todo from './pages/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar name={"Blog App"} />
      <Login isLoggedIn={true}/>
      <Todo />
    </>
  )
}

export default App