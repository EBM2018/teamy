import React, { Component } from 'react';

import {Route, Switch, BrowserRouter} from 'react-router-dom';


import './App.css';
import Layout from '../generic/Layout/Layout'
import RepartitionManagement from "../pages/RepartitionPage/RepartitionManagement/RepartitionManagement";
import Grouping from "../pages/GroupManagement/Grouping/Grouping";
import Connexion from "../pages/Connexion/Connexion"
import Apps from "../generic/Apps/Apps"
import "antd/dist/antd.css";
import Inscritpion from "../pages/Inscription/Inscription";

class App extends Component {
  render() {
    return (

            <BrowserRouter>
                <Switch>
                    <Layout>
                        <Route
                            exact
                            path="/"
                            component={Apps}
                            />
                        <Route
                            exact
                            path="/RepartitionManagement"
                            component={RepartitionManagement}
                        />
                        <Route
                            exact
                            path="/Grouping"
                            component={Grouping}
                        />
                        <Route
                            exact
                            path="/connexion"
                            component={Connexion}
                        />
                        <Route
                            exact
                            path="/inscription"
                            component={Inscritpion}
                        />
                    </Layout>
                </Switch>
            </BrowserRouter>

    );
  }
}

export default App;
