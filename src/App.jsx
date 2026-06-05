import React, { useState } from 'react'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Hero from './pages/Hero'
import About from './pages/About'
import Services from './pages/Services'
import Details from './pages/Details'
import Sidebar from './Layout/Sidebar'

function App() {
    const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className=' transition-all duration-300'>
      <Header 
      toggleMenu={toggleMenu}
      setToggleMenu ={setToggleMenu} />
      <Sidebar 
      toggleMenu = {toggleMenu}
      setToggleMenu = {setToggleMenu}/>
      <Hero/>
      <About/>
      <Details/>
      <Services/>     
      <Footer/> 
    </div>
  )
}

export default App
