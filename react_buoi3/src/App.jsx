import { useState } from 'react'
import './App.css'
import { PhoneShop } from './component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PhoneShop/>
    </>
  )
}

export default App
