import React from 'react';
import PropTypes from 'prop-types';
import classNames from './select_mode.module.css';
import {Link} from "react-router-dom";



export default class Select_Mode extends React.PureComponent {

    render(){
        return (
            <div>
                <button><Link to="/Group_Management">Gestion des Groupes</Link></button>
                <button><Link to="/List_Management">Gestion des Listes</Link></button>
            </div>
        )
    }
}