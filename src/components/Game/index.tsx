import React from "react";
import "./styles.scss";

const Game = () => {
  const maximumTime = 60;
  const remainTime = maximumTime;
  const questionObj = {
    question: "Hello ^^\nNice to meet you\nI'm fine thank you, and you?",
    answerList: ["Answer A", "Answer B", "Answer C", "Answer D"],
    answerIdx: 0
  };
  const progressWidthPercentage = (remainTime / maximumTime) * 100;

  return (
    <div className="game-container">
      <div className="time-container">
        <div className="time-icon-box">
          <img
            src="/images/game/game-clock.png"
            alt="Clock Icon"
            className="clock-icon"
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
        <div className="answer">{questionObj.answerList[0]}</div>
        <div className="answer">{questionObj.answerList[1]}</div>
        <div className="answer">{questionObj.answerList[2]}</div>
        <div className="answer">{questionObj.answerList[3]}</div>
      </div>
    </div>
  );
};

export default Game;
