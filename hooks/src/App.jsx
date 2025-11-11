import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from './components/useState';
import DataFetcher from './components/useEffect';
import PreviousValue from './components/useRef';
import Counter1 from './components/useReducer';
import DataParams from './components/singleProductPage';
import MyComponent from './pages/CustomHook';
import ParentComponent from './pages/Counter';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/use-state' element={<Counter title={"Counter"} />} /> 
          <Route path='/use-effect' element={<DataFetcher />} /> 
          <Route path='/use-ref' element={<PreviousValue />} /> 
          <Route path='/use-reducer' element={<Counter1 />} /> 
          <Route path='/use-params/:id' element={<DataParams />} /> 
          <Route path='/use-toggle' element={<MyComponent />} /> 
          <Route path='/counter' element={<ParentComponent />} /> 
        </Routes>
    </BrowserRouter>
  )
}

export default App