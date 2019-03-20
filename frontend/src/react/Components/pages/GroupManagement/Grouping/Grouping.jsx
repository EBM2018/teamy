import React from 'react';
//import PropTypes from 'prop-types';
import StudentGroup from '../StudentGroup/StudentGroup'
import classNames from './grouping.module.css';
import GroupManagementArea from '../GroupManagementArea/GroupManagementArea'
import { getStudents } from '../../../../../redux/student/actions'
import { connect  } from 'react-redux'


class Grouping extends React.PureComponent {


  componentWillMount(){
    this.props.getStudents()
  }
  state={
    studentsfromgroup: [],
    studentsoutgroup: [],
    selectedGroup: null,
  }

    render() {
        return (
            <div className={classNames.globalsearchwrapper} >
                <GroupManagementArea selectGroup={this.selectGroup}/>
                <StudentGroup getStudents ={this.refreshStudents} studentsfromgroup={this.state.studentsfromgroup} studentsoutgroup={this.state.studentsoutgroup} selectedGroup={this.state.selectedGroup}/>
            </div>
        )
    }

    refreshStudents = () => {
        this.props.getStudents();
        this.selectGroup(this.state.selectedGroup);
    }

    selectGroup= (idGroup) =>{

        this.setStudentsFromGroup(idGroup.key);
        this.setState({
          selectedGroup : idGroup,
        })

    }

    setStudentsFromGroup = (idGroup) =>{

      let students = [...this.props.students]
      let studentsfromgroup = []
        students.map(student => {
          student.listGroup.map(list => {
            for(var i = 0; i<= list.id_group.length; i++){
                if(list.id_group[i] === Number(idGroup)){
                  studentsfromgroup.push(student);
                  return null;
                }
            }
            return null;
          })
          return null;
        })
        let studentoutgroup = students;
        studentsfromgroup.map((student) => {
          studentoutgroup = studentoutgroup.filter(t => t !== student);
          return null;
        })
        this.setState({
          studentsfromgroup: studentsfromgroup,
          studentsoutgroup: studentoutgroup,
        })
    }
}


const mapStateToProps = state  => ({
    students : state.students.map,
  }
)

const mapDispatchToProps = {
  getStudents,
}

export default connect(mapStateToProps, mapDispatchToProps)(Grouping)