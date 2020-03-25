import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { ThemeContext } from "../../contexts/ThemeContext";
import { languages, LanguageContext } from "../../contexts/LanguageContext";

const Setting: React.FC = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const themeContext = useContext(ThemeContext);
  const { backButton, changeLanguage } = languages[lang];

  useEffect(() => {
    themeContext.setTheme(themeContext.themeName);
  }, [themeContext]);

  const handleSwitchLanguage = () => {
    console.log("hi");
    setLang(lang === "ko" ? "en" : "ko");
  };

  return (
    <div className="setting-container">
      <div className="setting-item-list">
        <div className="setting-item rh2">
          <label className="switch-language-btn" onClick={handleSwitchLanguage}>
            {changeLanguage}
          </label>
        </div>
      </div>
      <div className="back">
        <Link to="/" className="dft-btn rh2">
          {backButton}
        </Link>
      </div>
    </div>
  );
};

export default Setting;
