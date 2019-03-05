import React from "react";
import classNames from './studentlist.module.css'
import { List } from 'antd';

//import StudentItem from '../../../generic/StudentItem/StudentItem'

export default class StudentList extends React.PureComponent {


    render() {
        return (
            <div className={classNames.listcontainer}>
              <List
                bordered
                dataSource={this.props.users}
                renderItem={item => (
                  <List.Item key={item.id}>{item.name + " "+ item.last_name}</List.Item>
                )}
              />
            </div>
        )
    }
}

