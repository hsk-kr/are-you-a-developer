import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./styles.scss";
import { ThemeContext, defaultThemeContext } from "../../contexts/ThemeContext";
import { LanguageContext, defaultLanguageContext} from "../../contexts/LanguageContext";
import Main from "../Main";
import Setting from "../Setting";

const App = () => {
  return (
    <LanguageContext.Provider value={defaultLanguageContext}>
      <ThemeContext.Provider value={defaultThemeContext}>
        <Router>
          <Switch>
            <Route path="/setting" exact>
              <Setting />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </Router>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
};

export default App;
