import { useState } from 'react'

import './App.css'
import Location from './Components/Location'
import Navbar from "./Components/Navbar"

function App() {

  return (
    <>
    <Navbar />
    <div className='container-card'>
      <div className="App">
      <Location />
      </div>
      
    </div>
    
    </>
  )
}

export default App
