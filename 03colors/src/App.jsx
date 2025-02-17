import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setColor] = useState("black")


  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
  <h1 className="text-3xl font-bold underline">BG COLOR CHANGER</h1>
  <br></br>
  
  <button style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>blue</button>
  <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>blue</button>
  <button style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>blue</button>
  <button style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>blue</button>
  <button style={{backgroundColor:"magenta"}} onClick={()=>setColor("magenta")}>blue</button>
  </div>
    </>
  )
}

export default App
