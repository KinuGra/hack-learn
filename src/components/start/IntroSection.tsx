import React from 'react';
import { styles } from './styles';

const IntroSection: React.FC = () => {
  return (
    <section style={styles.introSection}>
      <h1 style={styles.introTitle}>Hack-and-Learn</h1>
      <p style={styles.introDescription}>学んで、成長する</p>
    </section>
  );
};

export default IntroSection;