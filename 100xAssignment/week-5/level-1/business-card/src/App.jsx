import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <BusinessCard></BusinessCard>
    </div>
    </>
  )
}

function BusinessCard(){
  return(
    <>
    <h1>Rahul Gujjar</h1>
    <h5>Software Engineer</h5>
    <b>Tech Stack</b>
    <ul>
      <li>Java</li>
      <li>MERN</li>
      <li>React</li>
    </ul>

    <a type='button' href="">Twitter</a>
    {' '} <br />
    <a type='button'  href="">LinkedIn</a>
    </>
  )
}

export default App
