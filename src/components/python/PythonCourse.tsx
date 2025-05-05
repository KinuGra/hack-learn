"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Header from '../Header';
import Footer from '../Footer';

const PythonCourse: React.FC = () => {
  const router = useRouter();

  const navigateToLesson = (lesson: string) => {
    router.push(`/python-course/${lesson}`);
  };

  return (
    <div style={styles.container}>
      <Header title="Python 学習コース" />
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
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center' as const,
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
