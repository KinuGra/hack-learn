"use client";

import React, { useState } from 'react';
import Header from './Header';
import IntroSection from './IntroSection';
import MainContent from './MainContent';
import Footer from './Footer';
import Menu from './Menu';
import { styles } from './styles';

const Start: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.topBar}>
        <button style={styles.iconButton} onClick={toggleMenu}>
          <span style={styles.hamburgerIcon}>☰</span>
        </button>
        <button style={styles.iconButton}>
          <span style={styles.settingsIcon}>⚙</span>
        </button>
      </div>
      {menuOpen && <Menu closeMenu={closeMenu} />}
      <Header />
      <IntroSection />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Start;