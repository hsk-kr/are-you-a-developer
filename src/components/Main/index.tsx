import React, { useContext, useEffect } from "react";
import "./styles.scss";
import { ThemeContext } from "../../contexts/ThemeContext";
import { LanguageContext, languages } from "../../contexts/LanguageContext";

const Main = (): React.ReactElement => {
  const themeContext = useContext(ThemeContext);
  const {lang} = useContext(LanguageContext);
  const {title, menuStart, menuHistory, menuSetting} = languages[lang];

  useEffect(() => {
    themeContext.setTheme(themeContext.themeName);
  }, [themeContext]);

  return (
    <div className="main-container">
      <div className="title-box">
        <h1 className="title">{title}</h1>
      </div>
      <div className="menu">
        <div className="menu-start">
          <label>{menuStart}</label>
        </div>
        <div className="menu-history">
          <label>{menuHistory}</label>
        </div>
        <div className="menu-setting">
          <label>{menuSetting}</label>
        </div>
      </div>
    </div>
  );
};

export default Main;
