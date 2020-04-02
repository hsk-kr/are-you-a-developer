import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.scss";
import "animate.css";
import { ThemeContext, defaultThemeContext } from "../../contexts/ThemeContext";
import LanguageProvider from "../../contexts/providers/LanguageProvider";
import Main from "../Main";
import Setting from "../Setting";
import Game from "../Game";
import GameResult from "../GameResult";
import QuestionsProvider from "../../contexts/providers/QuestionsProvider";

const App = () => {
    return (
        <LanguageProvider>
            <QuestionsProvider>
                <ThemeContext.Provider value={defaultThemeContext}>
                    <Router>
                        <Switch>
                            <Route path="/game" exact>
                                <Game />
                            </Route>
                            <Route path="/game-result" exact>
                                <GameResult />
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
            </QuestionsProvider>
        </LanguageProvider>
    );
};

export default App;
