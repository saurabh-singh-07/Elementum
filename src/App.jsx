import React from 'react'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Hero from './pages/Hero'
import About from './pages/About'
import Services from './pages/Services'

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Footer/> 
    </div>
  )
}

export default App
