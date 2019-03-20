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
  }

    render() {
        return (
            <div className={classNames.globalsearchwrapper} >
                <GroupManagementArea selectGroup={this.selectGroup}/>
                <StudentGroup studentsfromgroup={this.state.studentsfromgroup} studentsoutgroup={this.state.studentsoutgroup}/>
            </div>
        )
    }

    selectGroup= (idGroup) =>{

        this.setStudentsFromGroup(idGroup.key);
        this.setStudentsOutGroup(idGroup.key);

    }

    setStudentsFromGroup = (idGroup) =>{

      let students = [...this.props.students]
      console.log("studentsofgroup", this.props.students)
      let studentsfromgroup = []
        students.map(student => {
          student.listGroup.map(list => {
            if(list.id_repar === Number(idGroup)) {
              studentsfromgroup.push(student);
            }
            return null;
          })
          console.log(student)
          return null;
        })
        this.setState({
          studentsfromgroup: studentsfromgroup,
        })

    }
    setStudentsOutGroup = (idGroup) => {
      let students = [...this.props.students]
      let studentsoutgroup = []
      students.map(student => {
        student.listGroup.map(list => {
          if(list.id_repar !== Number(idGroup)) {
            studentsoutgroup.push(student);
          }
          return null;
        })
        console.log(student)
        return null;
      })
      this.setState({
        studentsoutgroup: studentsoutgroup,
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