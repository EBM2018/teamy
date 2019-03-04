import React from 'react';
//import PropTypes from 'prop-types';
//import classNames from './groupsArea.module.css';
import Group from '../Group/Group'



export default class GroupsArea extends React.PureComponent {
    render(){
        let row = [];
        for(let i = 0; i<=this.props.nbGroup; i++) {
            row.push(<Group/>)
        }
            return (
                <h1>{row}</h1>
            )
    }
}