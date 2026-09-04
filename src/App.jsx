import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'

function App() {
  
  return (
    <>
    <Header />

    <main>
      <Hero />
      <Projects />
      <About />
      <Hobbies />
      <Education />
    </main>

    <Footer />
    </>
  )   
}

export default App
