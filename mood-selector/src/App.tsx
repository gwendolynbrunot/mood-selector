import { useState } from 'react'
import MoodSelector from './MoodSelector';
import MoodDisplay from './MoodDisplay';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MoodSelector />
      <MoodDisplay />
    </>
  )
}

export default App
