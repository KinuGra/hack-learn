
            import React from 'react';
import './styles.css'; // 必要に応じてCSSファイルを作成してください

const AppLayout = () => {
  return (
    <div className="app-container">
      <div className="left-panel">
        <div className="header">
          {/* ヘッダー部分のコンテンツ */}
          <p>予習</p>
        </div>
        <div className="content">
          {/* 左側のコンテンツ */}
          <p>それではさっそくPythonを書いていきましょう。</p>
          <p>コードは画面の「エディター」で入力します。</p>
          <p>「コンソール」には実行したコードの結果が表示されます。</p>
          <p>さあ、「Hello World」で正しいコードの動作を確認します。</p>
          <p>「実行」<span style={{ border: '1px solid black', padding: '2px' }}>▶</span>をクリックすると、「コンソール」でコードを実行できます。</p>
          <div className="section-title">
            <p>hello.py</p>
          </div>
          <div className="input-area">
            <p>Hello World と出力してください</p>
          </div>
          <div className="button-group">
            <button className="hint-button">ヒントを見る</button>
            <button className="run-button">実行 ▶</button>
          </div>
        </div>
      </div>
      <div className="main-panel">
        <div className="editor-area">
          {/* エディター部分 */}
          <div className="editor-header">
            <p>hello.py</p>
          </div>
          <div className="editor-content">
            {/* コードエディターのような表示 */}
            <pre><code>1  print("Hello world")</code></pre>
            <pre><code>2</code></pre>
            <pre><code>3</code></pre>
          </div>
        </div>
        <div className="console-area">
          {/* コンソール部分 */}
          <div className="console-header">
            <p>コンソール</p>
          </div>
          <div className="console-content">
            {/* コンソールの出力内容 */}
          </div>
        </div>
        <div className="explanation-area">
          {/* 説明部分 */}
          <div className="explanation-header">
            <p>解説</p>
          </div>
          <div className="explanation-content">
            {/* 解説のコンテンツ */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
