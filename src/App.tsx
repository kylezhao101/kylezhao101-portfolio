import './App.css'

import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/homepage/Home';
import SFUEA from './pages/projects/SFUEA';
import Contact from './components/Contact';


function App() {

  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/SFUEA" element= {<SFUEA />} />
        </Routes>
        <Contact />
    </>
  )
}

export default App
