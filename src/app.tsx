"use client";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/start';
import JavaScriptCourse from './components/javascript/jsmain';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/javascript-course" element={<JavaScriptCourse />} />
      </Routes>
    </Router>
  );
};

export default App;