import './App.css';
import React from 'react';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Courses from './components/pages/Courses';
import Universities from './components/pages/Universities';
import Guide from './components/pages/Guide';
import NoteFound from './components/pages/NoteFound';


function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/universities' element={<Universities />} />
          <Route path='/guide' element={<Guide />} />
          <Route path='*' element={<NoteFound />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
