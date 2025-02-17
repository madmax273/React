import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter,setCounter]=useState(0)
  
  const adder = () =>{
    setCounter(counter+1)
  }

  const remover = () =>{
    
    setCounter(counter-1)
  }

  

  return (
    <>
      <h1>COUNTER :{counter}</h1>
      <button onClick={adder}>up</button>
      <hr></hr>
      <button onClick={remover}>down</button>
    </>
  )
}

export default App
