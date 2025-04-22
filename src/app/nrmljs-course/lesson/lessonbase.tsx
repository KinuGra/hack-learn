"use client";
import { DisplaySetJs } from '../lesson/prevJs';
import './lessbtype';
import './lessonbase.css'; // スタイルをインポート
import Image from 'next/image';
import { jsles } from './lessbtype';
import { useNavigate } from 'react-router-dom';

export function LessonBase({ title, description, details, example, exoutput, work, image, onClick}: jsles) {
    const navigate = useNavigate();
    const handleClick = () => {
        if (onClick) {  
            onClick();
        } else {
            navigate('/javascript-course'); 
        }
    }

  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{details}</p>
      <h2>Example</h2>
      <pre>{example}</pre>
      <h2>Output</h2>
      <div style={{ textAlign: "left", backgroundColor: "#212121", padding: "10px", borderRadius: "5px" }}>
        {exoutput}
      </div>
      {image && <Image src={image} alt="Lesson Image" width={500} height={300} unoptimized />}
      <h2>やってみよう</h2>
      <p>{work}</p>
      <DisplaySetJs ans= {"リンゴ食べたい"} />
      <button 
        onClick={handleClick} 
        style={{
          backgroundColor: '#4caf50', // 緑ベース
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          transition: 'background-color 0.3s',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#45a049')} // ホバー時の色
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#4caf50')} // 元の色に戻す
      >
        できた!
      </button>
    </div>
  );
}