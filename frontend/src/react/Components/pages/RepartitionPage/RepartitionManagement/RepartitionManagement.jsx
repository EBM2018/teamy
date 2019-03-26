import React from 'react';
//import PropTypes from 'prop-types';
import classNames from './repartitionmanagement.module.css';


import SelectQuantity from '../../../generic/SelectQuantity/SelectQuantity'
import RepartitionArea from '../RepartitionArea/RepartitionArea'
import SelectDate from '../SelectDate/SelectDate'
import StudentManagementArea from '../StudentManagementArea/StudentManagementArea'
import SelectTypeRepartition from "../../../generic/SelectTypeRepartition/SelectTypeRepartition";
import {Input} from "antd";
import ListGroupStudentRepartition from "../ListGroupStudentRepartition/ListGroupStudentRepartition";
//import {getUsersFromGroup} from "../../../../../redux/student/actions";
//import connect from "react-redux/es/connect/connect";
//import StudentGroup from "../../GroupManagement/StudentGroup/StudentGroup"

export default class RepartitionManagement extends React.PureComponent {

    state={
        nbRepartition: 2,
        nbEleve: 2,
        groupSelected: null,
        startDate: null,
        endDate: null,
        nomGroup: '',
    }
    displaySelectDate =()=>{
        console.log("group", this.state.groupSelected)
        if (this.state.groupSelected){
            return <SelectDate chosenDate={this.chosenDate}/>
        }

    }

    displayNomRepartition =()=>{
        console.log("DateDisplay", this.state.startDate, " - ", this.state.endDate)
        if (this.state.startDate && this.state.endDate){
            return <Input placeholder="Nom de la répartition" onPressEnter={this.onPressEnter}/>
        }
    }

    displayRepartition =()=>{
        console.log("Repartition", this.state.nomGroup)
        if (this.state.nomGroup){
            return <div>
                    <div className={classNames.typerep}><SelectTypeRepartition /></div>
                <SelectQuantity onColCountChange = {this.onColCountChange} onStudColCountChange = {this.onStudColCountChange}/>
                <div className={classNames.attributionarea}>
                    <RepartitionArea nbRepartition={this.state.nbRepartition} nbEleve={this.state.nbEleve}/>
                    <ListGroupStudentRepartition students={this.state.studentsfromgroup}/>
                </div>

            </div>
        }

    }


    chosenGroup= (idGroup) => {
        console.log("idGroup", idGroup);
        this.setState({
            groupSelected: idGroup,
        })
    }
    chosenDate= (dates) => {
        console.log("Date", dates);
        this.setState({
            startDate: dates[0],
            endDate: dates[1],
        })
    }

    onPressEnter= (value) =>{
        this.setState({
            nomGroup : value
    })}

render(){

    return (
        <div className={classNames.page}>
            <div className={classNames.studentmanagement}>
                <StudentManagementArea chosenGroup={this.chosenGroup}/>
                {this.displaySelectDate()}
                {this.displayNomRepartition()}
            </div>
            {this.displayRepartition()}
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

