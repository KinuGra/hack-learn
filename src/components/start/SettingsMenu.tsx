import React, { useState } from 'react';
import { styles } from './styles';

interface SettingsMenuProps {
  closeSettings: () => void;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({ closeSettings }) => {
  const [activeSection, setActiveSection] = useState<'全般' | '一般' | '表示'>('全般');

  const changeTheme = (theme: 'green' | 'blue' | 'dark') => {
    const root = document.documentElement;
    switch (theme) {
      case 'green':
        root.style.setProperty('--background', '#e8f5e9');
        root.style.setProperty('--foreground', '#388e3c');
        root.style.setProperty('--primary-color', '#4caf50');
        root.style.setProperty('--secondary-color', '#388e3c');
        root.style.setProperty('--accent-color', '#2e7d32');
        break;
      case 'blue':
        root.style.setProperty('--background', '#e3f2fd');
        root.style.setProperty('--foreground', '#1565c0');
        root.style.setProperty('--primary-color', '#2196f3');
        root.style.setProperty('--secondary-color', '#1976d2');
        root.style.setProperty('--accent-color', '#0d47a1');
        break;
      case 'dark':
        root.style.setProperty('--background', '#121212');
        root.style.setProperty('--foreground', '#ffffff');
        root.style.setProperty('--primary-color', '#bb86fc');
        root.style.setProperty('--secondary-color', '#3700b3');
        root.style.setProperty('--accent-color', '#03dac6');
        break;
      default:
        break;
    }
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case '全般':
        return <p>全般設定の内容をここに表示します。</p>;
      case '一般':
        return <p>一般設定の内容をここに表示します。</p>;
      case '表示':
        return (
          <div>
            <p>テーマを選択してください:</p>
            <button style={styles.button} onClick={() => changeTheme('green')}>緑</button>
            <button style={styles.button} onClick={() => changeTheme('blue')}>青</button>
            <button style={styles.button} onClick={() => changeTheme('dark')}>ダーク</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setActiveSection('全般')}>全般</button>
        <button onClick={() => setActiveSection('一般')}>一般</button>
        <button onClick={() => setActiveSection('表示')}>表示</button>
      </nav>
      <div>{renderSectionContent()}</div>
      <button onClick={closeSettings}>閉じる</button>
    </div>
  );
};

export default SettingsMenu;
