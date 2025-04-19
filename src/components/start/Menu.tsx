import React from 'react';
import { styles } from './styles';

interface MenuProps {
  closeMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ closeMenu }) => {
  return (
    <div style={styles.menu}>
      <button style={styles.closeButton} onClick={closeMenu}>
        閉じる
      </button>
      <ul style={styles.menuList}>
        <li style={styles.menuItem}>レッスン一覧</li>
        <li style={styles.menuItem}>開発者一覧</li>
        <li style={styles.menuItem}>通知</li>
        <li style={styles.menuItem}>アカウント設定</li>
      </ul>
    </div>
  );
};

export default Menu;