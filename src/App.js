import logo from './logo.svg';
import './App.css';
import React from 'react';
import Brief from './Brief';
import Experience from './Experience';
import Education from './Education';
import SelfProjects from './SelfProjects';
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
