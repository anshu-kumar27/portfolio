import { useState } from 'react'
import './App.css'
import MainBody from './componenets/MainBody'
function App() {
  const [count, setCount] = useState(0)

  return (
        <MainBody/>
  )
}

export default App
