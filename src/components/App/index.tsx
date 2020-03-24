import React from "react";
import "./styles.scss";
import { ThemeContext, defaultThemeContext } from "../../contexts/ThemeContext";
import { LanguageContext, defaultLanguageContext} from "../../contexts/LanguageContext";
import Main from "../Main";

const App = () => {
  return (
    <LanguageContext.Provider value={defaultLanguageContext}>
      <ThemeContext.Provider value={defaultThemeContext}>
        <Main />
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
};

export default App;
