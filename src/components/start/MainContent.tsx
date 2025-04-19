"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation';
import { styles } from './styles';


const MainContent: React.FC = () => {
  const navigate = useNavigate();
  const router = useRouter();
  const navigateToPythonCourse = () => {
    router.push('/python-course');
  };

  return (
    <main style={styles.main}>
      <p style={styles.description}>
        プログラミングを楽しく学びましょう！以下のコースから選んでください。
      </p>
      <div style={styles.buttonContainer}>
        <div style={styles.buttonWrapper}>
          <button onClick={navigateToPythonCourse} style={styles.button}>Python</button>
          <p style={styles.languageDescription}>Pythonは初心者に最適なプログラミング言語です。</p>
        </div>
        <div style={styles.buttonWrapper}>
          <button onClick={() => navigate('/javascript-course')} style={styles.button} >JavaScript</button>
          <p style={styles.languageDescription}>JavaScriptはウェブ開発に欠かせない言語です。</p>
        </div>
        <div style={styles.buttonWrapper}>
          <button style={styles.button}>C++</button>
          <p style={styles.languageDescription}>C++は高性能なアプリケーション開発に適しています。</p>
        </div>
      </div>
    </main>
  );
};

export default MainContent;