import React, { useEffect, useState, useContext } from "react";
import {
  QuestionsContext,
  Question,
  questions,
} from "../../contexts/QuestionsContext";
import { LanguageContext } from "../../contexts/LanguageContext";
import "./styles.scss";
import { Redirect } from "react-router-dom";

/**
 * Returns shuffled questions
 */
const generateRandNumList = (srtN: number, endN: number): number[] => {
  const numSequence: number[] = Array.from(
    new Array(endN - srtN + 1),
    (_, i) => i + srtN
  );
  const randNumList: number[] = [];

  while (numSequence.length > 0) {
    const rIdx = Math.floor(Math.random() * numSequence.length);
    randNumList.push(numSequence.splice(rIdx, 1)[0]);
  }

  return randNumList;
};

const Game = () => {
  const { changeIdxRandomly, currentQuestionIdx } =
    useContext(QuestionsContext);
  const { lang } = useContext(LanguageContext);
  const [progressWidthPercentage, setProgressWidthPercentage] =
    useState<number>(100);
  const [isGameEnd, gameEnd] = useState<boolean>(false);
  const [correctAnswerNum, setCorrectAnswerNum] = useState<number>(0);
  const [totalQuestionNum, setTotalQuestionNum] = useState<number>(0);
  const [questionObj, setQuestionObj] = useState<Question | null>(null);
  const [randNumList, setRandNumList] = useState<number[]>([0, 1, 2, 3]);

  const checkAnswer = (awNum) => {
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
    setRandNumList(generateRandNumList(0, 3));
    setQuestionObj(questions[lang][currentQuestionIdx]);
  }, [currentQuestionIdx, lang]);

  // change progress and process to finish the game
  useEffect(() => {
    let tmProgress = undefined;

    if (progressWidthPercentage > 0) {
      tmProgress = setTimeout(() => {
        setProgressWidthPercentage(progressWidthPercentage - 0.1);
      }, 10);
    } else {
      gameEnd(true);
    }

    return () => {
      tmProgress && clearTimeout(tmProgress);
    };
  }, [progressWidthPercentage]);

  if (isGameEnd) {
    return (
      <Redirect
        to={`game-result?total=${totalQuestionNum}&cn=${correctAnswerNum}`}
      />
    );
  } else if (questionObj === null) {
    return null;
  }

  return (
    <div className="game-container">
      <div className="time-container">
        <div className="time-icon-box">
          <img
            src={`${process.env.PUBLIC_URL}/images/game/game-clock.png`}
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
        {randNumList.map((rIdx, i) => (
          <div key={i} className="answer" onClick={() => checkAnswer(rIdx)}>
            {questionObj.answerList[rIdx]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;
