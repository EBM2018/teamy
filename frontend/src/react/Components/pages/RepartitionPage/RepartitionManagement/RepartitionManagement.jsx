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
        studentsfromgroup: [],
    }
    displaySelectDate =()=>{
        console.log("group", this.state.groupSelected)
        if (this.state.groupSelected){
            return (
              <div>
                <h3>Sélectionnez la date et l'heure de la séance concernée</h3>
                <SelectDate chosenDate={this.chosenDate}/>
              </div>
            )
        }

    }

    displayNomRepartition =()=>{
        console.log("DateDisplay", this.state.startDate, " - ", this.state.endDate)
        if (this.state.startDate && this.state.endDate){
            return (
              <div>
                <h3>Comment souhaitez vous nommer votre répartition d'étudiants ?</h3>
                <Input placeholder="Nom de la répartition" onPressEnter={this.onPressEnter}/>
              </div>
            )
        }
    }
    displayRepartition =()=>{
        if (this.state.nomGroup){
            return (<div>
                    <div className={classNames.typerep}><SelectTypeRepartition /></div>
                <SelectQuantity students={this.state.studentsfromgroup} onColCountChange = {this.onColCountChange} onStudColCountChange = {this.onStudColCountChange}/>
                <div className={classNames.attributionarea}>
                    <RepartitionArea nbRepartition={this.state.nbRepartition} nbEleve={this.state.nbEleve}/>
                    <ListGroupStudentRepartition students={this.state.studentsfromgroup}/>
                </div>

            </div>)
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
                <StudentManagementArea getStudentsFromGroup={this.getStudentsFromGroup} chosenGroup={this.chosenGroup}/>
                {this.displaySelectDate()}
                {this.displayNomRepartition()}
            </div>
            {this.displayRepartition()}
        </div>
    )
}

getStudentsFromGroup = (studentslist) => {
      console.log("list students", studentslist)
      this.setState({
        studentsfromgroup : studentslist,
      })
}


    onColCountChange = (colCountKey) =>{
        console.log("nbRepartition", colCountKey)
        this.setState({nbRepartition :colCountKey })
    }
    onStudColCountChange = (studcolCountKey) =>{
        console.log("nbEleve", studcolCountKey)
        this.setState({nbEleve :studcolCountKey })
    }

}

