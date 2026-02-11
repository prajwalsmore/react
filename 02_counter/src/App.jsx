import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  // let counter = 5

  const addValue = () =>{
    counter++
    console.log(counter);
    setCounter(counter)
    
  }

  const removeValue = () =>{
    counter--
    console.log(counter)
    setCounter(counter)
  }

  return (
    <>
      <h1>Hello world!</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}
      >Increase Value</button>
      <br />
      <br />
      
      <button onClick={removeValue}
      >Decrease Value</button>
    </>
  )
}

export default App
