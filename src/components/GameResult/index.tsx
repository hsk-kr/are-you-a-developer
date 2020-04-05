import React, { useState, useEffect } from "react";
import { useLocation, Redirect } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const GameResult = () => {
  const [query] = useState(useQuery());
  const [totalNum, setTotalNum] = useState<number>(0);
  const [correctNum, setCorrectNum] = useState<number>(0);
  const [loading, load] = useState<boolean>(true);
  const [hasError, error] = useState<boolean>(false);
  useEffect(() => {
    const total: number = Number(query.get("total"));
    const cn: number = Number(query.get("cn"));

    if (isNaN(total) || Number.isNaN(cn)) {
      error(true);
    } else {
      setTotalNum(total);
      setCorrectNum(cn);

      load(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (hasError) {
    return <Redirect to="/" />;
  }

  if (loading) {
    return null;
  }

  return (
    <div className="game-result-container">
      <h1>GAME RESULT</h1>
      <h2>total number of questions: {totalNum}</h2>
      <h2>number of correct answers: {correctNum}</h2>
    </div>
  );
};

export default GameResult;
