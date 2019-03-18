import React from 'react';
import {
    AutoComplete, Button, Icon, Input
} from "antd";

import classNames from '../StudentManagementArea/studentManagementArea.module.css';
import { connect  } from 'react-redux'
import { getGroups} from '../../../../../redux/group/actions'
import ListGroupStudentRepartition from "../ListGroupStudentRepartition/ListGroupStudentRepartition"
import {getStudents} from "../../../../../redux/student/actions";

const Option = AutoComplete.Option;

class StudentManagementArea extends React.PureComponent {


    state={
      studentsfromgroup: [],
    }

    componentWillMount() {
        this.props.getGroups()
    }



    render(){
        return (
            <div>
                <div>
                    <AutoComplete
                        className={classNames.searchbar}
                        placeholder="recherchez une Groupe"
                        optionLabelProp="text"
                        dataSource={this.props.groups.map(this.renderOption)}
                        filterOption={(inputValue, option) => {
                            console.log("Groupedata", this.props.groups);
                            console.log("option", option.props.children);
                            return option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }}
                    >
                        <Input className={classNames.input}
                               suffix={(
                                   <Button type="primary">
                                       <Icon type="search"/>
                                   </Button>
                               )}
                        />
                    </AutoComplete>
                </div>
                <ListGroupStudentRepartition students={this.state.studentsfromgroup}/>
            </div>

        )
    }
    renderOption = (item) => {
        return (
            <Option key={Number(item.id_repartition)} text={item.label_repartition} onClick={this.selectGroup}>
                {item.label_repartition}
            </Option>
        );
    };
    selectGroup= (idGroup) => {
      this.props.getStudents().then(
        () =>{this.setStudentsFromGroup(idGroup.key)
        })
    }
  setStudentsFromGroup = (idGroup) =>{
    let students = [...this.props.students]
    let studentsfromgroup = []
    students.map(student => {
      student.list_group.map(list => {
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


}


const mapStateToProps = state  => ({
        groups : state.groups.map,
        students : state.students.map,
    }
);

const mapDispatchToProps = {
    getGroups,
    getStudents,

};

export default connect(mapStateToProps, mapDispatchToProps)(StudentManagementArea)