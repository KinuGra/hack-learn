import React from "react";
import { useNavigate } from "react-router-dom";
import LangCard from "./LangCard";

type Lesson = {
    title: string;
    description: string;
    routes: string;
};

type ChooseLessonPageProps = {
    lessons: Lesson[];
};

export function ChooseLessonPage({ lessons }: ChooseLessonPageProps) {
    const navigate = useNavigate();

    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            justifyContent: "center",
            padding: "32px"
        }}>
            {lessons.map((lesson, idx) => (
                <LangCard
                    key={idx}
                    title={lesson.title}
                    description={lesson.description}
                    onClick={() => navigate(lesson.routes)}
                />
            ))}
        </div>
    );
}
