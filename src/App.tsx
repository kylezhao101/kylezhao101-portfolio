import './App.css'

import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/homepage/Home';
import SFUEA from './pages/projects/SFUEA';
import VA11HALLA from './pages/projects/VA11HALLA';
import Contact from './components/Contact';


function App() {

  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/SFUEA" element= {<SFUEA />} />
          <Route path="/VA11HALLA" element= {<VA11HALLA />} />

        </Routes>
        <Contact />
    </>
  )
}

export default App
