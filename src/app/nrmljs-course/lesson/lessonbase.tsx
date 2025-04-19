import './lessbtype';
import { jsles } from './lessbtype';


export function LessonBase({ title, description, details, example, exoutput }: jsles) {
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{details}</p>
        <h2>Example</h2>
        <pre>{example}</pre>
        <h2>Output</h2>
        <pre>{exoutput}</pre>
      </div>
    );
  }