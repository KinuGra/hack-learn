export type jsles = {
    title: string;
    description: string;
    details: string;
    example: string;
    exoutput: React.ReactNode; // 型をReact.ReactNodeに変更
    work: string;
    image?: any;
    answer: any;
    onClick?: () => void;
};