import React, { Component } from 'react';

import {Route, Switch, BrowserRouter} from 'react-router-dom';


import './App.css';
import Layout from '../Layout/Layout'
import GroupManagement from "../GroupManagement/GroupManagement";
import Listing from "../Listing/Listing";


class App extends Component {
  render() {
    return (
        <Layout>
            <BrowserRouter>
                <Switch>
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
                </Switch>
            </BrowserRouter>
        </Layout>
    );
  }
}

export default App;
