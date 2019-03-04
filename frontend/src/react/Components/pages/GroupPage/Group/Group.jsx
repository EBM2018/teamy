import React from 'react';
//import classNames from "../GroupsArea/groupsArea.module.css";
//import PropTypes from 'prop-types';
//import classNames from './group.module.css';
import {Card, Col} from 'antd'




export default class Group extends React.PureComponent {


    render() {

        return (
            <div>
                <Col span={12}>
                   <Card
                   title="default size card"
                   bordered={true}>
                       <li>
                           hello
                       </li>
                   </Card>
                </Col>
            </div>

        );
    }
}
