"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation';
import Header from './Header';
import LangCard from './LangCard'; // 新しいコンポーネントをインポート

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const router = useRouter();

  const navigateToPythonCourse = () => {
    router.push('/python-course');
  };

  return (
    <div style={styles.container}>
      <Header />
      <main style={styles.main}>
        <p style={styles.description}>
          プログラミングを楽しく学びましょう！以下のコースから選んでください。
        </p>
        <div style={styles.cardContainer}>
          <LangCard
            title="Python"
            description="Pythonの基本から応用まで学べます。"
            onClick={navigateToPythonCourse}
          />
          <LangCard
            title="JavaScript"
            description="JavaScriptのスキルを磨きましょう。"
            onClick={() => navigate('/javascript-course')}
          />
          <LangCard
            title="C++"
            description="C++の基礎を学びましょう。"
          />
        </div>
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
  },
  main: {
    marginTop: '20px',
  },
  description: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  footer: {
    marginTop: '30px',
    fontSize: '14px',
    color: '#888',
  },
};

export default HomeScreen;