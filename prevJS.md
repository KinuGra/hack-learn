prevJs.tsx
```
import React, { useState, useRef, useEffect } from "react";
import "../src/github-dark.css";

export function DisplaySetJs() {
  const [code, setCode] = useState<string>("");
  const [consoleOutput, setConsoleOutput] = useState<
    { type: "log" | "error" | "success"; message: string }[]
  >([]);
  const originalConsoleLog = useRef(console.log);
  const originalConsoleError = useRef(console.error);

  useEffect(() => {
    // console.logをフックして出力をconsoleOutputに保存（type: 'log'）
    console.log = (...args: any[]) => {
      setConsoleOutput((prevOutput) => [
        ...prevOutput,
        { type: "log", message: args.join(" ") },
      ]);
      originalConsoleLog.current(...args); // 元のconsole.logも実行
    };

    // console.errorをフックして出力をconsoleOutputに保存（type: 'error'）
    console.error = (...args: any[]) => {
      setConsoleOutput((prevOutput) => [
        ...prevOutput,
        { type: "error", message: args.join(" ") },
      ]);
      originalConsoleError.current(...args); // 元のconsole.errorも実行
    };

    return () => {
      // コンポーネントアンマウント時に元のconsole.logとconsole.errorに戻す
      console.log = originalConsoleLog.current;
      console.error = originalConsoleError.current;
    };
  }, []);

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
  };

  const handleRunCode = () => {
    try {
      setConsoleOutput((prevOutput) => [
        ...prevOutput,
        { type: "log", message: "実行中..." },
      ]);
      // eslint-disable-next-line no-eval
      const result = eval(code);
      setConsoleOutput((prevOutput) => [
        ...prevOutput,
        { type: "success", message: `Result: ${JSON.stringify(result)}` },
      ]);
    } catch (error: any) {
      setConsoleOutput((prevOutput) => [
        ...prevOutput,
        { type: "error", message: `Error: ${error.message}` },
      ]);
    }
  };

  const handleClearConsole = () => {
    setConsoleOutput([]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#0d1117",
        color: "#c9d1d9",
      }}
    >
      <textarea
        value={code}
        onChange={handleCodeChange}
        style={{
          flexGrow: 1,
          fontFamily: "monospace",
          fontSize: "16px",
          padding: "10px",
          backgroundColor: "#161b22",
          color: "#c9d1d9",
          border: "none",
          outline: "none",
        }}
      />
      <div style={{ padding: "10px", borderTop: "1px solid #30363d" }}>
        <button
          onClick={handleRunCode}
          style={{
            marginRight: "10px",
            backgroundColor: "#238636",
            color: "#fff",
            border: "none",
            padding: "8px 16px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          実行
        </button>
        <button
          onClick={handleClearConsole}
          style={{
            backgroundColor: "#444c56",
            color: "#fff",
            border: "none",
            padding: "8px 16px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          クリア
        </button>
        <div
          style={{
            marginTop: "10px",
            fontFamily: "monospace",
            fontSize: "14px",
            backgroundColor: "#0d1117",
            color: "#c9d1d9",
            padding: "10px",
            height: "200px",
            overflowY: "auto",
            border: "1px solid #30363d",
          }}
        >
          <strong>Console:</strong>
          {consoleOutput.map((item, index) => (
            <div
              key={index}
              style={{
                color:
                  item.type === "error"
                    ? "#f85149"
                    : item.type === "success"
                    ? "#238636"
                    : item.message.startsWith("実行中")
                    ? "#c9d1d9"
                    : item.message.startsWith("console.log")
                    ? "#58a6ff"
                    : "#c9d1d9",
              }}
            >
              {item.message.startsWith("console.log")
                ? item.message.replace(
                    "console.log",
                    '<span style="color: #58a6ff;">console.log</span>'
                  )
                : item.message}
            </div>
          ))}
        </div>
```


github-dark.css

```
/* github-dark.css */
.cm-s-github-dark.CodeMirror {
  background: #0d1117;
  color: #c9d1d9;
}
.cm-s-github-dark div.CodeMirror-cursor {
  border-left: 1px solid #fff;
}
.cm-s-github-dark .CodeMirror-selected {
  background: #21262d;
}
.cm-s-github-dark.CodeMirror-focused .cm-selectionBackground,
.cm-s-github-dark .cm-selectionBackground,
.cm-s-github-dark .cm-line::selection,
.cm-s-github-dark .cm-line > span::selection,
.cm-s-github-dark .cm-line > span > span::selection {
  background: #21262d;
}
.cm-s-github-dark .cm-line::-moz-selection,
.cm-s-github-dark .cm-line > span::-moz-selection,
.cm-s-github-dark .cm-line > span > span::-moz-selection {
  background: #21262d;
}

.cm-s-github-dark .cm-keyword {
  color: #ff7b72;
}
.cm-s-github-dark .cm-operator {
  color: #c9d1d9;
}
.cm-s-github-dark .cm-variable,
.cm-s-github-dark .cm-variable-2,
.cm-s-github-dark .cm-variable-3 {
  color: #c9d1d9;
}
.cm-s-github-dark .cm-def {
  color: #d2a8ff;
}
.cm-s-github-dark .cm-string {
  color: #a5d6ff;
}
.cm-s-github-dark .cm-number {
  color: #f0883e;
}
.cm-s-github-dark .cm-atom {
  color: #ffa726;
}
.cm-s-github-dark .cm-meta {
  color: #7ee787;
}
.cm-s-github-dark .cm-comment {
  color: #8b949e;
}
.cm-s-github-dark .cm-property {
  color: #c9d1d9;
}
.cm-s-github-dark .cm-qualifier {
  color: #d2a8ff;
}
.cm-s-github-dark .cm-builtin {
  color: #f0883e;
}
.cm-s-github-dark .cm-bracket {
  color: #c9d1d9;
}
.cm-s-github-dark .cm-tag {
  color: #1f6feb;
}
.cm-s-github-dark .cm-attribute {
  color: #d2a8ff;
}
.cm-s-github-dark .cm-header {
  color: #7ee787;
}
.cm-s-github-dark .cm-hr {
  background-color: #30363d;
  border: none;
  height: 1px;
}
.cm-s-github-dark .cm-link {
  color: #a5d6ff;
}
.cm-s-github-dark .cm-error {
  color: #f85149;
}

/* console.logの色付け */
.console-log {
  color: #58a6ff !important;
}
.console-error {
  color: #f85149 !important;
}
.console-success {
  color: #238636 !important;
}

```

こんな感じでコードを打てば

![Screenshot 2025-04-21 10 20 05](https://github.com/user-attachments/assets/beccc49d-a274-4382-950a-36949fa4353e)

こんな感じになる
アーキテクチャは以下の通り


![console log console error](https://github.com/user-attachments/assets/31aa4c67-52dd-46a9-961c-f980e50e0363)

これで実装する

 ## 課題
 脆弱性-評価を以下のコードで行っているため、
 const result = eval(code);
 
