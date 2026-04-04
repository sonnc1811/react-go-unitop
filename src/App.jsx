import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Welcome(){
  return (
    <div>
      <h1>Chao ban !</h1>
  <p>Ban dang hoc React go tai Unitop.vn</p>
    </div>
  )
}
function App() {
   return (
    <>
           <h1>React Go Unitop.vn</h1>
           <Welcome />
              </>
  )
}

export default App
