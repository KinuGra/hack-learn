"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation';
import Header from './Header';
import LangCard from './LangCard';
import Footer from './Footer';
import { ChooseLessonPage } from './chooseLessonPage'

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const router = useRouter();

  const lessons = [
      {
        title: "Python",
        description: "Pythonの基本から応用まで学べます",
        routes: '/python-course'
      },
      {
        title: "JavaScript",
        description: "JavaScriptのスキルを磨きましょう。",
        routes: '/javascript-course'
      },

    ];

  return (
    <div style={styles.container}>
      <Header title="HACK LEARN" />
      <main style={styles.main}>
        <p style={styles.description}>
          プログラミングを楽しく学びましょう！以下のコースから選んでください。
        </p>
        <div style={styles.cardContainer}>
          <ChooseLessonPage lessons={lessons} />
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