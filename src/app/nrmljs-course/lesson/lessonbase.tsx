"use client";

import './lessbtype';
import './lessonbase';
import Image from 'next/image';
import { jsles } from './lessbtype';

export function LessonBase({ title, description, details, example, exoutput, work, image }: jsles) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{details}</p>
      <h2>Example</h2>
      <pre>{example}</pre>
      <h2>Output</h2>
      <pre>{exoutput}</pre>
      {/* Next.jsのImageコンポーネントを使用 */}
      {image && <Image src={image} alt="Lesson Image" width={500} height={300} />}
      <h2>やってみよう</h2>
      <p>{work}</p>
    </div>
  );
}