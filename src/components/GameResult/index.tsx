import React, { useState, useEffect, useContext } from "react";
import "./styles.scss";
import { useLocation, Redirect, Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import { LanguageContext, languages } from "../../contexts/LanguageContext";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const GameResult = () => {
  const [query] = useState(useQuery());
  const [totalNum, setTotalNum] = useState<number>(0);
  const [correctNum, setCorrectNum] = useState<number>(0);
  const [resultText, setResultText] = useState<string>("");
  const [loading, load] = useState<boolean>(true);
  const [hasError, error] = useState<boolean>(false);

  const themeContext = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);
  const {
    resultTitle,
    numberOfTotalQuestions,
    numberOfCorrectAnswers,
    numberOfIncorrectAnswers,
    perfectScoreTitle,
    goodSCoreTitle,
    badScoreTitle,
    redirectToMain
  } = languages[lang];

  useEffect(() => {
    themeContext.setTheme(themeContext.themeName);
  }, [themeContext]);

  useEffect(() => {
    const total: number = Number(query.get("total"));
    const cn: number = Number(query.get("cn"));

    if (total === cn) {
      if (total >= 10) {  
        setResultText(perfectScoreTitle);
      } else {
        setResultText(goodSCoreTitle);
      }
    } else {
      setResultText(badScoreTitle);
    }

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
  } else if (loading) {
    return null;
  }

  return (
    <div className="game-result-container">
      <div className="game-result-box">
        <h1>{resultTitle}</h1>
        <h2>{resultText}</h2>
        <h2>
          {numberOfTotalQuestions}: {totalNum}
        </h2>
        <h2>
          {numberOfCorrectAnswers}: {correctNum}
        </h2>
        <h2>
          {numberOfIncorrectAnswers}: {totalNum - correctNum}
        </h2>
        <h1>
          <Link to="/">{redirectToMain}</Link>
        </h1>
      </div>
    </div>
  );
};

export default GameResult;
