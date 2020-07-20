import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {PATH_ABOUT, PATH_HOME} from "../constants/path";
import HomeContainer from "./HomeContainer";
import AboutContainer from "./AboutContainer";
import MenuComponent from "../components/MenuComponent";

const RootContainer = () => (
    <Router>
        <MenuComponent/>
        <Switch>
            <Route
                path={PATH_HOME}
                render={(props) =>
                    <HomeContainer {...props}/>
                }/>
            <Route
                path={PATH_ABOUT}
                render={(props) =>
                    <AboutContainer {...props}/>
                }/>
            <Route
                path={"/"}
                exact={true}
            ><Redirect to={PATH_HOME}/></Route>
        </Switch>
    </Router>
)

export default RootContainer;