import React, { Component } from 'react';

import {Route, Switch, BrowserRouter} from 'react-router-dom';


import './App.css';
import Layout from '../generic/Layout/Layout'
import GroupManagement from "../pages/GroupPage/GroupManagement/GroupManagement";
import Listing from "../pages/ListManagement/Listing/Listing";
import Connexion from "../pages/Connexion/login"
import Apps from "../generic/Apps/Apps"
import "antd/dist/antd.css";
import Inscritpion from "../pages/Inscription/inscription";

class App extends Component {
  render() {
    return (

            <BrowserRouter>
                <Switch>
                    <Layout>
                        <Route
                            exact
                            path="/Apps"
                            component={Apps}
                            />
                        <Route
                            exact
                            path="/GroupManagement"
                            component={GroupManagement}
                        />
                        <Route
                            exact
                            path="/Listing"
                            component={Listing}
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
