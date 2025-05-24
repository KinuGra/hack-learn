import React from 'react';

interface LangCardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

export function LangCard({ title, description, onClick}:LangCardProps){
  return (
    <div style={styles.card} onClick={onClick}>
      <h2 style={styles.cardTitle}>{title}</h2>
      <p style={styles.cardDescription}>{description}</p>
    </div>
  );
};

const styles = {
  card: {
    width: '300px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center' as const,
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontSize: '20px',
    margin: '0 0 10px',
  },
  cardDescription: {
    fontSize: '14px',
    color: '#555',
  },
};

export default LangCard;
