import '../lesson/lessbtype';
import { LessonBase } from '../lesson/lessonbase';

export function Lesson1() {
    const allLessons = {
        title: "console.log()",
        description: "コンソールに文字列を表示する",
        details: "console.log()を使って、文字列を表示します。",
        example: "console.log(\"Hello World\");",
        exoutput: "Hello World",
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
        onClick: () => {
            console.log("Lesson 4 clicked");
        }
    };
    return (
        <LessonBase {...allLessons} />
    );
}
