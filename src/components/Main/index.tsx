import React, { useContext, useEffect } from "react";
import "./styles.scss";
import { ThemeContext } from "../../contexts/ThemeContext";

const Main = (): React.ReactElement => {
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    themeContext.setTheme(themeContext.themeName);
  }, [themeContext]);

  return (
    <div className="main-container">
      <div className="title-box">
        <h1 className="title">TITLE</h1>
      </div>
      <div className="menu">
        <div className="menu-start">
          <label>START</label>
        </div>
        <div className="menu-history">
          <label>HISTORY</label>
        </div>
        <div className="menu-setting">
          <label>SETTING</label>
        </div>
      </div>
    </div>
  );
};

export default Main;
