import React from 'react';
//import PropTypes from 'prop-types';
import classNames from './groupManagement.module.css';


import SelectQuantity from '../../../generic/SelectQuantity/SelectQuantity'
import GroupsArea from '../GroupsArea/GroupsArea'
import StudentManagementArea from '../StudentManagementArea/StudentManagementArea'
import SelectTypeGroup from "../../../generic/SelectTypeGroup/SelectTypeGroup";





export default class GroupManagement extends React.PureComponent {

    state={
        nbGroup: 2,
        nbEleve: 2,
    }
render(){
    return (
        <div className={classNames.page}>
            <SelectTypeGroup/>
            <SelectQuantity onColCountChange = {this.onColCountChange} onStudColCountChange = {this.onStudColCountChange}/>
            <div className={classNames.attributionarea}>
                <GroupsArea nbGroup={this.state.nbGroup} nbEleve={this.state.nbEleve}/>
                <StudentManagementArea/>
            </div>
        </div>
    )
}
    onColCountChange = (colCountKey) =>{
        this.setState({nbGroup :colCountKey })
    }
    onStudColCountChange = (studcolCountKey) =>{
        this.setState({nbEleve :studcolCountKey })
    }
}