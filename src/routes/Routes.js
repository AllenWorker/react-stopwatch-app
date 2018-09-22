import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import History from "../pages/History";
import HomePage from "../pages/HomePage";
import Settings from "../pages/Settings";
import LoginPage from "../pages/LoginPage";



class Routes extends Component {
    render() {
        return(
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/home" component={HomePage}/>
                <Route path="/history" component={History}/>
            </Switch>
        );
    }
}

export default Routes;