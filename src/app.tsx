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
        <Route path="/javascript-level-1" element={<div>レベル1の内容</div>} />
        <Route path="/javascript-level-2" element={<div>レベル2の内容</div>} />
        <Route path="/javascript-level-3" element={<div>レベル3の内容</div>} />
        <Route path="/javascript-level-4" element={<div>レベル4の内容</div>} />
        <Route path="/javascript-level-5" element={<div>レベル5の内容</div>} />
      </Routes>
    </Router>
  );
};

export default App;