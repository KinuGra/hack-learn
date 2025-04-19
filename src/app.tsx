"use client";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/start/start';
import JavaScriptCourse from './components/javascript/jsmain';
import {Lesson1,Lesson2,Lesson3,Lesson4,Lesson5,Lesson6} from '../src/app/nrmljs-course/lesson1/lesson';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/javascript-course" element={<JavaScriptCourse />} />
        <Route path="/javascript-lesson-1" element={<Lesson1 />} />
        <Route path="/javascript-lesson-2" element={<Lesson2 />} />
        <Route path="/javascript-lesson-3" element={<Lesson3 />} />
        <Route path="/javascript-lesson-4" element={<Lesson4 />} />
        <Route path="/javascript-lesson-5" element={<Lesson5 />} />
        <Route path="/javascript-lesson-6" element={<Lesson6 />} />
      </Routes>
    </Router>
  );
};

export default App;