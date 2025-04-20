import React from 'react';
import { useNavigate } from 'react-router-dom';

const JavaScriptMain: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <button style={styles.backButton} onClick={() => navigate('/')}>
          ← 戻る
        </button>
        <h1 style={styles.title}>JavaScript 学習コース</h1>
      </header>
      <main style={styles.main}>
        <p style={styles.description}>
          JavaScriptのスキルをレベルアップしましょう！以下のレベルを選択してください。
        </p>
        <div style={styles.buttonContainer}>
          {[1, 2, 3, 4, 5, 6].map((lesson) => (
            <button
              key={lesson}
              style={styles.button}
              onClick={() => navigate(`/javascript-lesson-${lesson}`)}
            >
              レベル {lesson}
            </button>
          ))}
        </div>
      </main>
      <footer style={styles.footer}>
        <p>© 2025 JavaScript 学習コース</p>
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
    backgroundColor: '#f7df1e',
    color: '#000',
    padding: '10px 0',
    position: 'relative' as const,
  },
  backButton: {
    position: 'absolute' as const,
    left: '10px',
    top: '10px',
    padding: '5px 10px',
    fontSize: '14px',
    backgroundColor: '#fff',
    color: '#000',
    border: '1px solid #ccc',
    borderRadius: '3px',
    cursor: 'pointer',
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
  footer: {
    marginTop: '30px',
    fontSize: '14px',
    color: '#888',
  },
};

export default JavaScriptMain;