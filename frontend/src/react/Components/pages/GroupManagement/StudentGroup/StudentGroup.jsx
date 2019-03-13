import React from "react";
import classNames from './studentgroup.module.css'
import {AutoComplete, Button, Icon, Input, List} from 'antd';

//import StudentItem from '../../../generic/StudentItem/StudentItem'

const Option = AutoComplete.Option;


export default class StudentGroup extends React.PureComponent {


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
      <Option key={Number(item.id)} text={item.name} onClick={this.selectGroup}>
        {item.name + " " +item.last_name}
      </Option>
    );
  }

}

