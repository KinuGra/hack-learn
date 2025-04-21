import React, { useState } from 'react';


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
        
      case '表示':
        return <p>表示設定の内容をここに表示します。</p>;
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
