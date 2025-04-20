
export function Setupjs() {
    return (
        <div>
            <h1>JavaScriptの実行環境を作ろう！</h1>
            <p>このドキュメントに沿って行ってください</p>
            <h2>vscodeをインストールしよう</h2>
            <p>以下のリンクからvscodeをインストールしてください</p>
            <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">vscodeのダウンロード</a>
            <h2>vscodeを開こう</h2>
            <p>ホーム画面を右クリックし新規作成-フォルダを押します</p>
            <p>フォルダ名は何でも大丈夫ですが、迷ったら"hacklearn"とかにしときましょう</p>
            <p>そのフォルダを開いてあるvscodeの真ん中らへんにドラッグします</p>
            <p>次に、ファイルを作ってみましょう</p>
            <p>左上のファイルのボタンを押します</p>
            <img src='/setupjs1.svg' />
            <p>index.htmlとscript.jsを作成します</p>
            <p>index.htmlはhtmlファイル、script.jsはjavascriptファイルです</p>
            <p>index.htmlを開いて、以下のコードをコピペしてください</p>
            <pre>
                {`<!DOCTYPE html>
<html lang="ja">
<head>      
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Hello World</h1>
    <script src="script.js"></script>
</body>
</html>`}
            </pre>

            <p>次にscript.jsを開いて、以下のコードをコピペしてください</p>
            <pre>
                {`console.log("Hello World");`}
            </pre>
            <p>これで準備完了です！</p>
            <p>index.htmlを右クリックし、パスをコピーし、ブラウザにペーストします</p>
            <p>F12を押すと、コンソールが開きます</p>
            <p>そこに"Hello World"と表示されていれば成功です！</p>

        </div>
    )
}