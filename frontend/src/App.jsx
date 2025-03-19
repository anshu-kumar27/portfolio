import { useState } from 'react'
import './App.css'
// import Loading from './componenets/loading/Loading'
import MainBody from './componenets/MainBody'
import { BrowserRouter } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <MainBody/>
    </BrowserRouter>
  )
}

export default App
