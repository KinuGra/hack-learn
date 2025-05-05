"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation';
import Header from './Header';
import LangCard from './LangCard';
import Footer from './Footer';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const router = useRouter();

  const navigateToPythonCourse = () => {
    router.push('/python-course');
  };

  return (
    <div style={styles.container}>
      <Header title="HACK LEARN" />
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
  cardContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '20px',
    marginTop: '20px',
  },
};

export default HomeScreen;