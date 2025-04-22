import '../lesson/lesson.css'; // 新規追加
import '../lesson/lessonbase.css'; // 新規追加
import '../lesson/lessbtype';
import { LessonBase } from '../lesson/lessonbase';

export function Lesson1() {
    const allLessons = {
        title: "console.log()",
        description: "コンソールに文字列を表示する",
        details: "console.log()を使って、文字列を表示します。",
        example: "console.log(\"Hello World\");",
        exoutput: "Hello World",
        work: "Hello World を表示してみよう",
        answer: "Hello World",
        onClick: () => {
            console.log("Lesson 1 clicked");
        },
    };
    return (
        <LessonBase {...allLessons} />
    );
}
export function Lesson2() {
    const allLessons = {
        title: "alert()",
        description: "アラートを表示する",
        details: "alert()を使って、アラートを表示します。",
        example: "alert(\"Hello World\");",
        exoutput: "Hello World",
        work: "Hello World と、アラートで表示してみよう",
        answer: "",
        onClick: () => {
            console.log("Lesson 2 clicked");
        },
    };
    return (
        <LessonBase {...allLessons} />
    );
}
export function Lesson3() {
    const allLessons = {
        title: "prompt()",
        description: "プロンプトを表示する",
        details: "prompt()を使って、プロンプトを表示します。",
        example: "prompt(\"Hello World\");",
        exoutput: "Hello World",
        work: "Hello World をプロンプトで表示してみよう",
        answer: "",
        onClick: () => {
            prompt("Lesson 3 clicked");
        },
    };
    return (
        <LessonBase {...allLessons} />
    );
}
export function Lesson4() {
    const allLessons = {
        title: "変数と定数",
        description: "変数と定数を使う",
        details:
            "letとconstを使って、変数と定数を使います。変数は変更可能で、定数は変更できません。使い道→変数は一時的な値を保存するのに使い、定数は変更しない値を保存するのに使います。応用レッスンでだんだんとわかってきますので、今はざっくりわかっていれば大丈夫です。",
        example: "let x = 10; const y = 20; console.log(x + y);",
        exoutput: "30",
        work: "変数xに500、定数yに30を代入して、xとyを足してみよう",
        answer: 530,
        onClick: () => {
            console.log("Lesson 4 clicked");
        }
    };
    return (
        <LessonBase {...allLessons} />
    );
}
export function Lesson5() {
    const allLessons = {
        title: "数値型、文字列型",
        description: "数値型、文字列型を使う",
        details: "数値型と文字列型を使います。数値型は数字を扱い、文字列型は文字を扱います。使い道→数値型は計算に使い、文字列型は文字の操作に使います。",
        example: "let x = \"10\"; const y = \"20\"; console.log(x + y);",
        exoutput: "30",
        work: "数値型xに500、数値型yに30を代入して、xとyを足してみよう。 \n 文字列型xに500、文字列型yに30を代入して、xとyを足してみよう。",
        answer: "530\n50030",

    };
    return (
        <LessonBase {...allLessons} />
    );
}
export function Lesson6() {
    const allLessons = {
        title: "真偽値型",
        description: "真偽値型を使う",
        details: "真偽値型を使います。真偽値型はtrueまたはfalseの値を持ちます。使い道→条件分岐やループ処理に使います。",
        image: "/booleanimage.svg",
        example: "while (i < 5) {\n  console.log(\"Hello World\") \n  i += 1; \n}",
        exoutput: "Hello World Hello World Hello World Hello World Hello World",
        work: "while文を使って、\"こんにちは！ぼくだよ\"と8回表示してみよう",
        answer: {
            " こんにちは！ぼくだよ ": 7, },
        
    };
        return(
        <LessonBase { ...allLessons } />
    );
}