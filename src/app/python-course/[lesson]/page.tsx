"use client";

import { useParams } from 'next/navigation';
import React from 'react';

const LessonPage: React.FC = () => {
  const { lesson } = useParams();

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>{lesson} の内容</h1>
      </header>
      <main style={styles.main}>
        <p style={styles.description}>
          {lesson} の詳細な内容がここに表示されます。
        </p>
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
  footer: {
    marginTop: '30px',
    fontSize: '14px',
    color: '#888',
  },
};

export default LessonPage;
