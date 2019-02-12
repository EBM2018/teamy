import React from 'react';
//import PropTypes from 'prop-types';
//import classNames from './groupManagement.module.css';


import SelectQuantity from '../SelectQuantity/SelectQuantity'
import GroupsArea from '../GroupsArea/GroupsArea'
import StudentManagementArea from '../StudentManagementArea/StudentManagementArea'




export default class GroupManagement extends React.PureComponent {

render(){
    return (
        <div>
            <SelectQuantity/>
            <GroupsArea/>
            <StudentManagementArea/>
        </div>
    )
}
}