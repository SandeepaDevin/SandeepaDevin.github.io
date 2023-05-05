import logo from './logo.svg';
import './App.css';
import React from 'react';
import Brief from './pages/Brief';
import Experience from './pages/Experience';
import Education from './pages/Education';
import SelfProjects from './pages/SelfProjects';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Brief} />
        <Route path='/education' component={Education} />
        <Route path='/experience' component={Experience} />
        <Route path='/selfprojects' component={SelfProjects} />
      </Routes>
    </Router>
  );
}

export default App;
