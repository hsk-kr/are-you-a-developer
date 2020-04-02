import { createContext } from "react";

export type Question = {
    question: string;
    answerList: Array<string>;
    answerIdx: number;
};

export type Questions = {
    ko: Question[];
    en: Question[];
};

export type QuestionsContextType = {
    currentQuestionIdx: number;
    changeIdxRandomly: Function;
};

export const questions: Questions = {
    ko: [
        {
            question: "다음 중 FIFO 자료구조로 옳은 것은?",
            answerList: ["스택", "큐", "트리", "해쉬"],
            answerIdx: 1
        },
        {
            question: "다음 중 비관계형 데이터베이스는?",
            answerList: ["Mysql", "MariaDB", "MongoDB", "Mssql"],
            answerIdx: 2
        }
    ],
    en: [
        {
            question: "Which one is the FIFO structure?",
            answerList: ["Stack", "Queue", "Tree", "Hash"],
            answerIdx: 1
        },
        {
            question: "Which one is Non-SQL Database?",
            answerList: ["Mysql", "MariaDB", "MongoDB", "Mssql"],
            answerIdx: 2
        }
    ]
};

export const defaultQuestionsContext: QuestionsContextType = {
    currentQuestionIdx: 0,
    changeIdxRandomly: () => {}
};

export const QuestionsContext = createContext<QuestionsContextType>(
    defaultQuestionsContext
);
