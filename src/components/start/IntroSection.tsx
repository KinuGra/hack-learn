import React from 'react';
import { styles } from './styles';

const IntroSection: React.FC = () => {
  return (
    <section style={styles.introSection}>
      <h1 style={styles.introTitle}>学んで、成長する</h1>
      <p style={styles.introDescription}>プログラミング学習アプリ</p>
    </section>
  );
};

export default IntroSection;