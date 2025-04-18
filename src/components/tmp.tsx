import React from 'react';

const HomeScreen: React.FC = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>プログラミング学習アプリ</h1>
      </header>
      <main style={styles.main}>
        <p style={styles.description}>
          プログラミングを楽しく学びましょう！以下のコースから選んでください。
        </p>
        <div style={styles.buttonContainer}>
          <button style={styles.button}>Python</button>
          <button style={styles.button}>C++?</button>
          <button style={styles.button}>React</button>
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
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
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

export default HomeScreen;