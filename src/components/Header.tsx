import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>プログラミング学習アプリ</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: 'rgb(83, 193, 182)',
    color: 'white',
    padding: '10px 0',
    margin: 0,
  },
  title: {
    margin: 0,
  },
};

export default Header;
