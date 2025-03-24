import { useState } from 'react'
import Todo from './components/Todo/todo'
import Calculadora from './components/Calculadora/Calculadora'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <Todo/>
          <Calculadora/>
    </>
  )
}

export default App
