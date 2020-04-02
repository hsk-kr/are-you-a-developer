import React, { useState } from "react";
import {
    QuestionsContext,
    QuestionsContextType,
    defaultQuestionsContext,
    questions
} from "../QuestionsContext";

interface Props {
    children: React.ReactNode;
}

const QuestionsProvider = ({ children }: Props) => {
    const [questionsCtx, setQuestionsCtx] = useState<QuestionsContextType>(
        defaultQuestionsContext
    );

    // TODO: It has to be changed...
    const value = {
        ...questionsCtx,
        changeIdxRandomly: (lang: string) => {
            setQuestionsCtx({
                ...questionsCtx,
                currentQuestionIdx: Math.floor(
                    Math.random() * questions[lang].length
                )
            });
        }
    };

    return (
        <QuestionsContext.Provider value={value}>
            {children}
        </QuestionsContext.Provider>
    );
};

export default QuestionsProvider;
