import React, { Component } from 'react';

import {Route, Switch, BrowserRouter} from 'react-router-dom';


import './App.css';
import Layout from '../Layout/Layout'
import Group_Management from "../Group_Management/Group_Management";
import List_Management from "../Listing/Listing";


class App extends Component {
  render() {
    return (
        <Layout>
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/Group_Management"
                        component={Group_Management}
                    />
                    <Route
                        exact
                        path="/List_Management"
                        component={List_Management}
                    />
                </Switch>
            </BrowserRouter>
        </Layout>
    );
  }
}

export default App;
