import React from "react";
import "./styles.scss";
import { ThemeContext, defaultThemeContext } from "../../contexts/ThemeContext";
import Main from "../Main";

const App = () => {
  return (
    <ThemeContext.Provider value={defaultThemeContext}>
      <Main />
    </ThemeContext.Provider>
  );
};

export default App;
