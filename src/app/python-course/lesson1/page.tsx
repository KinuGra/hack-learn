"use client";

import './monaco-editor.css'; // Monaco Editor専用のCSSをインポート
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
    <div className="lesson-container">
      <header className="lesson-header">
        <h1 className="lesson-title">Lesson 1: Pythonの基本文法</h1>
      </header>
      <main className="lesson-main">
        <p className="lesson-description">
          以下のコードをMonacoエディターに模写してください。模写が完了したら、Pythonの基本文法を理解できるようになります。
        </p>
        <div className="monaco-editor-container">
          <Editor
            height="400px"
            defaultLanguage="python"
            value={code}
            onChange={handleEditorChange}
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              automaticLayout: true,
            }}
          />
        </div>
      </main>
      <footer className="lesson-footer">
        <p>© 2025 プログラミング学習アプリ</p>
      </footer>
    </div>
  );
};

export default Lesson1Page;

