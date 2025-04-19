import './lessbtype';
import './lessonbase'
import { jsles } from './lessbtype';


export function LessonBase({ title, description, details, example, exoutput, work}: jsles) {
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{details}</p>
        <h2>Example</h2>
        <pre>{example}</pre>
        <h2>Output</h2>
        //exoutputが文字列ではない場合それを実行する処理を書きたい 条件 && exoutput みたいな
        <pre>{exoutput}</pre>
        <h2>やってみよう</h2>
        <p>{work}</p>
      </div>
    );
  }