import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Image from './components/Image'
import Name from './components/Name'
import Buttons from './components/Buttons'
import About from './components/About'
import Interest from './components/Interest'
import Footer from './components/Footer'
import './App.css'

function App() {
  
  return (
    <div className="App">
      <Image/>
      <Name/>
      <Buttons/>
      <About/>
      <Interest/>
      <Footer/>
    </div>
  )
}

export default App
