import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './component/Register'
import SignUp from './component/Sign-Up'
import Register from './component/Register'
import ParentComponent from './component/ParentComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SignUp /> */}
      {/* <Register /> */}
      <ParentComponent />

    </>
  )
}

export default App
