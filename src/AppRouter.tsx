import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import {TicTacToeTable} from "./components/tictactoe/TicTacToeTable";
import PageNotFound from "./components/PageNotFound";
import ChatApp from "./components/chatapp/ChatApp";
import Home from "./components/Home";

export default function AppRouter() {

    return (
        <Router basename={""}>
            <div className="main" id='wrapper'>
                <Switch>
                    <Route path={"/home"} component={Home}/>
                    <Route path={"/chatapp"} component={ChatApp}/>
                    <Route path={"/tictactoe"} component={TicTacToeTable}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </div>
        </Router>
    )
}