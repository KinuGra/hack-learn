"use client";
import {ChooseLevelPage} from '../chooseLevelPage'

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const JavaScriptMain: React.FC = () => {
  const navigate = useNavigate();
  const levels = [
    { title: "初級", description: "プログラミング初心者向け", routes: "/beginner" },
    { title: "中級", description: "基礎を学んだ人向け", routes: "/intermediate" },
    { title: "上級", description: "応用力を身につけたい人向け", routes: "/advanced" }
  ];

  return (
    <div style={styles.container}>
      <Header title="JavaScript 学習コース" />
      <main style={styles.main}>
        <p style={styles.description}>
          JavaScriptのスキルをレベルアップしましょう！以下のレベルを選択してください。
        </p>
        <div style={styles.buttonContainer}>
          {[1, 2, 3, 4, 5].map((level) => (
            <button
              key={level}
              style={styles.button}
              onClick={() => navigate(`/javascript-level-${level}`)}
            >
              レベル {level}
            </button>
          ))}
        </div>
        <ChooseLevelPage allLevel={levels} />
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
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap' as const,
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default JavaScriptMain;