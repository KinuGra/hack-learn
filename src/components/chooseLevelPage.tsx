import React from "react";
import { useNavigate } from "react-router-dom";
import LangCard from "./LangCard";

// allLevelの型を修正
type Level = {
    title: string;
    description: string;
    routes: string;
};

type ChooseLevelPageProps = {
    allLevel: Level[];
};

export function ChooseLevelPage({ allLevel }: ChooseLevelPageProps) {
    const navigate = useNavigate();

    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            justifyContent: "center",
            padding: "32px"
        }}>
            {allLevel.map((level, idx) => (
                <LangCard
                    key={idx}
                    title={level.title}
                    description={level.description}
                    onClick={() => navigate(level.routes)}
                />
            ))}
        </div>
    );
}