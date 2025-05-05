import React from 'react';

interface LessonCardProps {
  title: string;
  progress: number; // 数値として受け取る
  total: number; // 合計数
  onClick?: () => void; // クリックイベントハンドラ
}

const LessonCard: React.FC<LessonCardProps> = ({ title, progress, total, onClick }) => {
  return (
    <div style={styles.card} onClick={onClick}>
      <div style={styles.leftBar}></div>
      <div style={styles.content}>
        <span style={styles.title}>{title}</span>
        <div style={styles.progress}>
          <span style={styles.icon}>▶</span>
          <span style={styles.progressText}>
            {progress}/{total}
          </span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '300px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    transition: 'box-shadow 0.2s',
  },
  leftBar: {
    width: '10px',
    backgroundColor: 'rgb(83, 193, 182)',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 15px',
    flex: 1,
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
  },
  progress: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  icon: {
    fontSize: '14px',
    color: 'rgb(83, 193, 182)',
  },
  progressText: {
    fontSize: '14px',
    color: '#888',
  },
};

export default LessonCard;
