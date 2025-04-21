import React, { useState, useRef, useEffect } from "react";
import "../lesson/github-dark.css";

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

      // 一時的に元のconsoleを復元
      console.log = (...args: any[]) => {
        setConsoleOutput((prevOutput) => [
          ...prevOutput,
          { type: "log", message: args.join(" ") },
        ]);
        originalConsoleLog.current(...args);
      };

      console.error = (...args: any[]) => {
        setConsoleOutput((prevOutput) => [
          ...prevOutput,
          { type: "error", message: args.join(" ") },
        ]);
        originalConsoleError.current(...args);
      };

      // eslint-disable-next-line no-eval
      const result = eval(code);

      // Resultを明確に表示
      if (result !== undefined) {
        setConsoleOutput((prevOutput) => [
          ...prevOutput,
          { type: "success", message: `Result: ${JSON.stringify(result, null, 2)}` },
        ]);
      }
    } catch (error: any) {
      setConsoleOutput((prevOutput) => [
        ...prevOutput,
        { type: "error", message: `Error: ${error.message}` },
      ]);
    } finally {
      // フックを再適用
      console.log = (...args: any[]) => {
        setConsoleOutput((prevOutput) => [
          ...prevOutput,
          { type: "log", message: args.join(" ") },
        ]);
        originalConsoleLog.current(...args);
      };

      console.error = (...args: any[]) => {
        setConsoleOutput((prevOutput) => [
          ...prevOutput,
          { type: "error", message: args.join(" ") },
        ]);
        originalConsoleError.current(...args);
      };
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
                    : "#c9d1d9",
              }}
            >
              {typeof item.message === "object"
                ? JSON.stringify(item.message, null, 2) // オブジェクトを文字列化
                : item.message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}