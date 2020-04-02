import React, { useEffect, useState, useContext, useCallback } from "react";
import { QuestionsContext, questions } from "../../contexts/QuestionsContext";
import { LanguageContext } from "../../contexts/LanguageContext";
import "./styles.scss";
import { Redirect } from "react-router-dom";

const Game = () => {
    const { changeIdxRandomly, currentQuestionIdx } = useContext(
        QuestionsContext
    );
    const { lang } = useContext(LanguageContext);
    const [progressWidthPercentage, setProgressWidthPercentage] = useState(100);
    const [isGameEnd, gameEnd] = useState(false);
    const [correctAnswerNum, setCorrectAnswerNum] = useState(0);
    const [totalQuestionNum, setTotalQuestionNum] = useState(0);
    const [questionObj, setQuestionObj] = useState(null);

    const checkAnswer = awNum => {
        setTotalQuestionNum(totalQuestionNum + 1);

        if (awNum === questions[lang][currentQuestionIdx].answerIdx) {
            setCorrectAnswerNum(correctAnswerNum + 1);
        }

        changeIdxRandomly(lang);
    };

    // Initalize Effect
    useEffect(() => {
        changeIdxRandomly(lang);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // change a question when question idx changed
    useEffect(() => {
        setQuestionObj(questions[lang][currentQuestionIdx]);
    }, [currentQuestionIdx, lang]);

    // change progress and process to finish the game
    useEffect(() => {
        if (progressWidthPercentage > 0) {
            setTimeout(() => {
                setProgressWidthPercentage(progressWidthPercentage - 0.1);
            }, 10);
        } else {
            // gameEnd(true);
        }
    }, [progressWidthPercentage]);

    if (isGameEnd) {
        return <Redirect to={"game-result"} />;
    }

    if (questionObj === null) {
        return null;
    }

    return (
        <div className="game-container">
            <div className="time-container">
                <div className="time-icon-box">
                    <img
                        src="/images/game/game-clock.png"
                        alt="Clock Icon"
                        className="clock-icon animated infinite swing delay-1s"
                    />
                </div>
                <div className="progress-box">
                    <div
                        className="progress-bar"
                        style={{ width: `${progressWidthPercentage}%` }}
                    ></div>
                </div>
            </div>
            <div className="question-box">
                <pre>{questionObj.question}</pre>
            </div>
            <div className="answers-box">
                <div className="answer" onClick={() => checkAnswer(0)}>
                    {questionObj.answerList[0]}
                </div>
                <div className="answer" onClick={() => checkAnswer(1)}>
                    {questionObj.answerList[1]}
                </div>
                <div className="answer" onClick={() => checkAnswer(2)}>
                    {questionObj.answerList[2]}
                </div>
                <div className="answer" onClick={() => checkAnswer(3)}>
                    {questionObj.answerList[3]}
                </div>
            </div>
        </div>
    );
};

export default Game;
