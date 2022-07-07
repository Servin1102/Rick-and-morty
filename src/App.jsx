import { useState } from 'react'

import './App.css'
import Location from './Components/Location'
import Navbar from "./Components/Navbar"
import Residents from './Components/Residents'

function App() {

  return (
    <>
    <Navbar />
    <div className='container'>
      <div className="App">
        <Location />
      </div>
      <Residents />
    </div>
    
    </>
  )
}

export default App
