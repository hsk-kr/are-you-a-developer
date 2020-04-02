import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { ThemeContext } from "../../contexts/ThemeContext";
import { LanguageContext, languages } from "../../contexts/LanguageContext";

const Main = (): React.ReactElement => {
  const themeContext = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);
  const {
    title,
    menuStart,
    menuHistory,
    menuSetting,
    notSupported
  } = languages[lang];

  useEffect(() => {
    themeContext.setTheme(themeContext.themeName);
  }, [themeContext]);

  return (
    <div className="main-container">
      <div className="title-box">
        <h1 className="title rh1 animated infinite bounce">{title}</h1>
      </div>
      <div className="menu">
        <div className="menu-start">
          <Link to="/game" className="dft-btn rh2">
            {menuStart}
          </Link>
        </div>
        <div className="menu-history" onClick={() => alert(notSupported)}>
          <Link to="." className="dft-btn rh2">
            {menuHistory}
          </Link>
        </div>
        <div className="menu-setting">
          <Link to="/setting" className="dft-btn rh2">
            {menuSetting}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
