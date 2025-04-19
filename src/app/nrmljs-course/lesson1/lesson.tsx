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