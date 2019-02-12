import React from 'react';
//import PropTypes from 'prop-types';
//import classNames from './selectMode.module.css';
import {Link} from "react-router-dom";
import { Button } from 'antd';


export default class SelectMode extends React.PureComponent {

    render(){
        return (
            <div >
                <Button type="primary"><Link to="/GroupManagement">Gestion des Groupes</Link></Button>
                <Button type="danger"><Link to="/Listing">Gestion des Listes</Link></Button>
            </div>
        )
    }
}