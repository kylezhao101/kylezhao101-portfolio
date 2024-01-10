import './App.css'

import NavBar from './components/NavBar';
import Hero from './pages/homepage/Hero';
import Skills from './pages/homepage/Skills';
import Projects from './pages/homepage/Projects';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
