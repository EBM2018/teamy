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
import {getGroupById} from "../../../../../redux/repartition/actions";
import connect from "react-redux/es/connect/connect";


class RepartitionManagement extends React.PureComponent {

    state={
        nbRepartition: 2,
        nbEleve: 2,
        groupSelected: null,
        startDate: null,
        endDate: null,
        nomRepart: '',
        studentsfromgroup: [],
        unusedStudents: [],
        repartitionCreated: false,
    }

    displaySelectDate =()=>{
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
        if (this.state.startDate && this.state.endDate){
            return (
              <div>
                <h3>Comment souhaitez vous nommer votre répartition d'étudiants ?</h3>
                <Input placeholder="Nom de la répartition" onInput={this.updateRepartitionName} onPressEnter={this.onPressEnter}/>
              </div>
            )
        }
    }

  updateRepartitionName = (e) => {
    this.setState({nomRepart: (e.target).value})
  }
    displayRepartition =()=>{
        if (this.state.repartitionCreated){
          this.createSeance();
            return (<div>
                    <div className={classNames.typerep}><SelectTypeRepartition /></div>
                <SelectQuantity students={this.state.studentsfromgroup} onColCountChange = {this.onColCountChange} onStudColCountChange = {this.onStudColCountChange}/>
                <div className={classNames.attributionarea}>
                    <RepartitionArea getUnusedStudents={this.getUnusedStudents} nbRepartition={this.state.nbRepartition} nbEleve={this.state.nbEleve} students={this.state.unusedStudents}/>
                    <ListGroupStudentRepartition students={this.state.unusedStudents}/>
                </div>

            </div>)

        }


    }

    createSeance = () => {
        console.log("creation de la répartition"+ this.state.nomRepart+" du groupe : ", this.state.groupSelected,
          "démarrant le ", this.state.startDate._d, " finissant le " + this.state.endDate._d)
    }

    getUnusedStudents = (unusedStudents) => {
        this.setState({
          unusedStudents: unusedStudents
        })
    }
    chosenGroup= (idGroup) => {

        // TODO: récupération des données du groupe sélectionné

      /*this.props.getGroupById(idGroup).then(() => {
        console.log("group selected", this.props.group)
      })*/

        this.setState({
            groupSelected: idGroup,
        })
    }
    chosenDate= (dates) => {
        this.setState({
            startDate: dates[0],
            endDate: dates[1],
        })
    }

    onPressEnter= () =>{
        console.log("value", this.state.nomRepart)
        this.setState({
          repartitionCreated: true,
        })
    }

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
          this.setState({
            studentsfromgroup : studentslist,
            unusedStudents : studentslist
          })
    };


    onColCountChange = (colCountKey) =>{
        this.setState({nbRepartition :colCountKey })
    };
    onStudColCountChange = (studcolCountKey) =>{
        this.setState({nbEleve :studcolCountKey })
    };

}
const mapStateToProps = state  => ({
    repartition: state.repartition.map,
  }
);

const mapDispatchToProps = {
  getGroupById,
};

export default connect(mapStateToProps, mapDispatchToProps)(RepartitionManagement)
