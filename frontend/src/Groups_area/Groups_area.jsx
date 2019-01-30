import React from 'react';
import PropTypes from 'prop-types';
import classNames from './groups_area.module.css';
import Group from '../Group/Group'



export default class Groups_area extends React.PureComponent {

    render(){
        return (
            <div>
                <Group/>
            </div>
        )
    }
}