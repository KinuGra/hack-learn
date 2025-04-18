"use client";

import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const Lesson1Page: React.FC = () => {
  const [code, setCode] = useState<string>(`# Pythonの基本文法を学びましょう！
# 以下のコードを模写してください。

# 1. print文
print("Hello, World!")

# 2. 変数
x = 10
print(x)

# 3. if文
if x > 5:
    print("xは5より大きい")

# 4. for文
for i in range(5):
    print(i)
`);

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || '');
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Lesson 1: Pythonの基本文法</h1>
      </header>
      <main style={styles.main}>
        <p style={styles.description}>
          以下のコードをMonacoエディターに模写してください。模写が完了したら、Pythonの基本文法を理解できるようになります。
        </p>
        <div style={styles.editorContainer}>
          <Editor
            height="400px"
            defaultLanguage="python"
            value={code}
            onChange={handleEditorChange}
            options={{
              fontSize: 14,
              minimap: { enabled: false },
            }}
          />
        </div>
      </main>
      <footer style={styles.footer}>
        <p>© 2025 プログラミング学習アプリ</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center' as const,
    padding: '20px',
  },
  header: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 0',
  },
  title: {
    margin: 0,
  },
  main: {
    marginTop: '20px',
  },
  description: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  editorContainer: {
    margin: '0 auto',
    maxWidth: '800px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  footer: {
    marginTop: '30px',
    fontSize: '14px',
    color: '#888',
  },
};

export default Lesson1Page;
