import React from "react";
import classNames from './studentgroup.module.css'
import {AutoComplete, Button, Icon, Input, List} from 'antd';
import { modifyUser } from '../../../../../redux/student/actions';
import connect from "react-redux/es/connect/connect";

//import StudentItem from '../../../generic/StudentItem/StudentItem'

const Option = AutoComplete.Option;


class StudentGroup extends React.PureComponent {


    state = {
      userToAdd: this.props.studentsoutgroup,
    };

    render() {
        return (
            <div className={classNames.listcontainer}>
                <List
                    bordered
                    dataSource={this.props.studentsfromgroup}
                    renderItem={item => (
                        <List.Item key={item.id}>{item.name + " "+ item.last_name}</List.Item>
                    )}
                />
              <AutoComplete
                className={classNames.addinput}
                placeholder="recherchez un étudiant"
                optionLabelProp="text"
                dataSource={this.props.studentsoutgroup.map(this.renderOption)}
                filterOption={(inputValue, option) => {
                  return option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }}
              >
                <Input
                       suffix={(
                         <Button type="primary">
                           <Icon type="plus"/>
                         </Button>
                       )}
                />
              </AutoComplete>
            </div>
        )
    }

  renderOption = (item) => {
    return (
      <Option key={item._id} text={item.name + " " + item.last_name} onClick={this.addStudentToList}>
        {item.name + " " +item.last_name}
      </Option>
    );
  }

  addStudentToList = (student) => {
      let userToAdd = [...this.props.studentsoutgroup];
      userToAdd = userToAdd.filter(t => t._id === student.key);
      userToAdd.map( (user) => {
        user.listGroup.map( (group) => {
          group.id_group = group.id_group.concat(Number(this.props.selectedGroup.key))
          return null;
        })
        this.props.modifyUser(user);

        return this.refreshUsers();
      })


  }

  refreshUsers = () => {
      this.props.getStudents();
  }

}

const mapStateToProps = state  => ({
    students : state.students.map,
  }
)

const mapDispatchToProps = {
    modifyUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentGroup)