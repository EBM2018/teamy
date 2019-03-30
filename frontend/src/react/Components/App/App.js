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
import ProtectedRoute from "../generic/ProtectedRoute/ProtectedRoute"
import StudentLanding from "../pages/StudentLanding/StudentLanding";

class App extends Component {
  render() {
    return (

            <BrowserRouter>
                <Switch>
                    <Layout>
                        <Route
                            exact
                            path="/"
                            render={() => <ProtectedRoute component={Apps}/>}
                            />
                        <Route
                          exact
                          path="/RepartitionManagement"
                          render={() => <ProtectedRoute component={RepartitionManagement}/>}
                        />

                        <Route
                          exact
                          path="/Grouping"
                          render={() => <ProtectedRoute component={Grouping}/>}
                        />
                        <Route
                          exact
                          path="/studentpage"
                          render={() => <ProtectedRoute component={StudentLanding}/>}
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
