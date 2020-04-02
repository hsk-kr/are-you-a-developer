import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.scss";
import "animate.css";
import { ThemeContext, defaultThemeContext } from "../../contexts/ThemeContext";
import LanguageProvider from "../../contexts/providers/LanguageProvider";
import Main from "../Main";
import Setting from "../Setting";
import Game from "../Game";

const App = () => {
  return (
    <LanguageProvider>
      <ThemeContext.Provider value={defaultThemeContext}>
        <Router>
          <Switch>
            <Route path="/game" exact>
              <Game />
            </Route>
            <Route path="/setting" exact>
              <Setting />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </Router>
      </ThemeContext.Provider>
    </LanguageProvider>
  );
};

export default App;
