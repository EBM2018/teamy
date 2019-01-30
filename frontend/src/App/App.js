import React, { Component } from 'react';

import {Route, Switch, BrowserRouter} from 'react-router-dom';


import './App.css';
import Layout from '../Layout/Layout'
import Main from "../Main/Main";


class App extends Component {
  render() {
    return (
        <Layout>
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/main"
                        component={Main}
                    />
                    <Route
                        exact
                        path="/connexion"
                        component={Main}
                    />
                </Switch>
            </BrowserRouter>
        </Layout>
    );
  }
}

export default App;
