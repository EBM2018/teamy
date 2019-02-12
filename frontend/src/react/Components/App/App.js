import React, { Component } from 'react';

import {Route, Switch, BrowserRouter} from 'react-router-dom';


import './App.css';
import Layout from '../Layout/Layout'
import GroupManagement from "../GroupManagement/GroupManagement";
import Listing from "../Listing/Listing";
import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (

            <BrowserRouter>
                <Switch>
                    <Layout>
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
                    </Layout>
                </Switch>
            </BrowserRouter>

    );
  }
}

export default App;
