import './App.css';
import React from 'react';
import Home from './pages/';
import Experience from './pages/Experience';
import Education from './pages/Education';
import SelfProjects from './pages/SelfProjects';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/education' element={<Education />} />
        <Route path='/experience' element={<Experience /> } />
        <Route path='/selfprojects' element={<SelfProjects /> } />
      </Routes>
      <Footer></Footer>
    </Router>
  );
};

export default App;
