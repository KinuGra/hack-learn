"use client";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/start';
import JavaScriptCourse from './components/javascript/jsmain';
import {Lesson1,Lesson2,Lesson3,Lesson4} from '../src/app/nrmljs-course/lesson1/lesson';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/javascript-course" element={<JavaScriptCourse />} />
        <Route path="/javascript-level-1" element={<Lesson1 />} />
        <Route path="/javascript-level-2" element={<Lesson2 />} />
        <Route path="/javascript-level-3" element={<Lesson3 />} />
        <Route path="/javascript-level-4" element={<Lesson4 />} />
        <Route path="/javascript-level-5" element={<div>レベル5の内容</div>} />
      </Routes>
    </Router>
  );
};

export default App;