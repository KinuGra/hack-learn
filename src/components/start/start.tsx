"use client";

import React, { useState } from 'react';
import Header from './Header';
import IntroSection from './IntroSection';
import MainContent from './MainContent';
import Footer from './Footer';
import Menu from './Menu';
import SettingsMenu from '../start/SettingsMenu'; // 新規追加
import { styles } from './styles';

const Start: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false); // 新規追加

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleSettings = () => { // 新規追加
    setSettingsOpen(!settingsOpen);
  };

  const closeSettings = () => { // 新規追加
    setSettingsOpen(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.topBar}>
        <button style={styles.iconButton} onClick={toggleMenu}>
          <span style={styles.hamburgerIcon}>☰</span>
        </button>
        <button style={styles.iconButton} onClick={toggleSettings}>
          <span style={styles.settingsIcon}>⚙</span>
        </button>
      </div>
      {menuOpen && <Menu closeMenu={closeMenu} />}
      {settingsOpen && (
        <div style={styles.settingsMenu}>
          <button style={styles.settingsCloseButton} onClick={closeSettings}>
            閉じる
          </button>
          <SettingsMenu closeSettings={closeSettings} />
        </div>
      )}
      <Header />
      <IntroSection />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Start;