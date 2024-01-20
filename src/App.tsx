import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/homepage/Home';
import SFUEA from './pages/projects/SFUEA';
import ROAMFY from './pages/projects/ROAMFY';
import VA11HALLA from './pages/projects/VA11HALLA';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/VA11HALLA" element={<VA11HALLA />} />
          <Route path="/ROAMFY" element={<ROAMFY />} />
          <Route path="/SFUEA" element={<SFUEA />} />
        </Routes><Contact />
      </Router>
    </>
  )
}

export default App
