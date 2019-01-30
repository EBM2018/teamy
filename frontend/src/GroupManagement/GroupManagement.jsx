import React from 'react';
//import PropTypes from 'prop-types';
//import classNames from './groupManagement.module.css';

import SelectMode from '../SelectMode/SelectMode'
import SelectQuantity from '../SelectQuantity/SelectQuantity'
import GroupsArea from '../GroupsArea/GroupsArea'
import StudentManagementArea from '../StudentManagementArea/StudentManagementArea'




export default class GroupManagement extends React.PureComponent {

render(){
    return (
        <div>
            <SelectMode/>
            <SelectQuantity/>
            <GroupsArea/>
            <StudentManagementArea/>

        </div>
    )
}
}