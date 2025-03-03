import { useState } from 'react'
import Home from './Pages/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hola</h1>
      <Home/>
    </>
  )
}

export default App
