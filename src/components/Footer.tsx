import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 プログラミング学習アプリ</p>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: '30px',
    fontSize: '14px',
    color: '#888',
  },
};

export default Footer;
