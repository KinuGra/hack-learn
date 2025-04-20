import React, { useState } from 'react';
import { styles } from './styles';

interface SettingsMenuProps {
  closeSettings: () => void;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({ closeSettings }) => {
  const [activeSection, setActiveSection] = useState<'全般' | '一般' | '表示'>('全般');

  const renderSectionContent = () => {
    switch (activeSection) {
      case '全般':
        return <p>全般設定の内容をここに表示します。</p>;
      case '一般':
        return <p>一般設定の内容をここに表示します。</p>;
      case '表示':
        return <p>表示設定の内容をここに表示します。</p>;
      default:
        return null;
    }
  };

  return (
    <div style={styles.settingsMenu}> {/* 修正: styles.settingsMenu を使用 */}
      <button style={styles.settingsCloseButton} onClick={closeSettings}>
        閉じる
      </button>
      <ul style={styles.menuList}>
        <li
          style={styles.menuItem}
          onClick={() => setActiveSection('全般')}
        >
          全般
        </li>
        <li
          style={styles.menuItem}
          onClick={() => setActiveSection('一般')}
        >
          一般
        </li>
        <li
          style={styles.menuItem}
          onClick={() => setActiveSection('表示')}
        >
          表示
        </li>
      </ul>
      <div>
        {renderSectionContent()}
      </div>
    </div>
  );
};

export default SettingsMenu;
