import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>{title}</h1>
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
