import React from 'react';
//import PropTypes from 'prop-types';
import classNames from './repartitionmanagement.module.css';


import SelectQuantity from '../../../generic/SelectQuantity/SelectQuantity'
import RepartitionArea from '../RepartitionArea/RepartitionArea'
import StudentManagementArea from '../StudentManagementArea/StudentManagementArea'
import SelectTypeRepartition from "../../../generic/SelectTypeRepartition/SelectTypeRepartition";
//import {getUsersFromGroup} from "../../../../../redux/student/actions";
//import connect from "react-redux/es/connect/connect";
//import StudentGroup from "../../GroupManagement/StudentGroup/StudentGroup"





export default class RepartitionManagement extends React.PureComponent {

    state={
        nbRepartition: 2,
        nbEleve: 2,
    }
render(){
    return (
        <div className={classNames.page}>
            <SelectTypeRepartition/>
            <SelectQuantity onColCountChange = {this.onColCountChange} onStudColCountChange = {this.onStudColCountChange}/>
            <div className={classNames.attributionarea}>
                <RepartitionArea nbRepartition={this.state.nbRepartition} nbEleve={this.state.nbEleve}/>
                <StudentManagementArea/>
            </div>
        </div>
    )
}


    onColCountChange = (colCountKey) =>{
        this.setState({nbRepartition :colCountKey })
    }
    onStudColCountChange = (studcolCountKey) =>{
        this.setState({nbEleve :studcolCountKey })
    }

}

