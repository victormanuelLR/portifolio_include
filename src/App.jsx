import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("tema");
    if (savedTheme) return savedTheme;

    const standartTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return standartTheme ? "dark" : "light";

  })

  if (theme == "dark")
      document.documentElement.classList.add("dark");
  else 
      document.documentElement.classList.remove("dark");

  localStorage.setItem("tema", theme);

  function handleToggleTheme () {
      setTheme((prev) => (prev == "dark") ? "light": "dark")
  }
  return (
    <>
    
    <Header toogleTheme={handleToggleTheme} theme={theme}/>

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
