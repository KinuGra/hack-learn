import React from 'react';
import { styles } from './styles';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Hack-and-learn</h1>
    </header>
  );
};

export default Header;