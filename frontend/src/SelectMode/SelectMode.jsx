import React from 'react';
//import PropTypes from 'prop-types';
//import classNames from './selectMode.module.css';
import {Link} from "react-router-dom";



export default class SelectMode extends React.PureComponent {

    render(){
        return (
            <div>
                <button><Link to="/GroupManagement">Gestion des Groupes</Link></button>
                <button><Link to="/Listing">Gestion des Listes</Link></button>
            </div>
        )
    }
}