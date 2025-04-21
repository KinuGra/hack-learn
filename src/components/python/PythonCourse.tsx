"use client";
 
 import React from 'react';
 import { useRouter } from 'next/navigation';
 
 const PythonCourse: React.FC = () => {
   const router = useRouter();
 
   const navigateToLesson = (lesson: string) => {
     router.push(`/python-course/${lesson}`);
   };
 
   return (
     <div style={styles.container}>
       <header style={styles.header}>
         <h1 style={styles.title}>Python 学習コース</h1>
       </header>
       <main style={styles.main}>
         <p style={styles.description}>
           Pythonの基本から応用まで学べるコースです。以下のレッスンを選んでください。
         </p>
         <ul style={styles.lessonList}>
           <li>
             <button style={styles.lessonButton} onClick={() => navigateToLesson('lesson1')}>
               Lesson 1: Pythonの基本文法
             </button>
           </li>
           <li>
             <button style={styles.lessonButton} onClick={() => navigateToLesson('lesson2')}>
               Lesson 2: データ構造とアルゴリズム
             </button>
           </li>
           <li>
             <button style={styles.lessonButton} onClick={() => navigateToLesson('lesson3')}>
               Lesson 3: Web開発入門
             </button>
           </li>
         </ul>
       </main>
       <footer style={styles.footer}>
         <p>© 2025 プログラミング学習アプリ</p>
       </footer>
     </div>
   );
 };
 
 const styles = {
   container: {
     fontFamily: 'Arial, sans-serif',
     textAlign: 'center' as const,
     padding: '20px',
   },
   header: {
     backgroundColor: '#4CAF50',
     color: 'white',
     padding: '10px 0',
   },
   title: {
     margin: 0,
   },
   main: {
     marginTop: '20px',
   },
   description: {
     fontSize: '18px',
     marginBottom: '20px',
   },
   lessonList: {
     listStyleType: 'none',
     padding: 0,
     fontSize: '16px',
   },
   footer: {
     marginTop: '30px',
     fontSize: '14px',
     color: '#888',
   },
   lessonButton: {
     padding: '10px 20px',
     fontSize: '16px',
     backgroundColor: '#4CAF50',
     color: 'white',
     border: 'none',
     borderRadius: '5px',
     cursor: 'pointer',
     marginBottom: '10px',
   },
 };
 
 export default PythonCourse;