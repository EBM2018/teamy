import React from 'react';
//import classNames from './repartition.module.css';
import {Card, Col} from 'antd'
import ListStudents from "../ListStudents/ListStudents";




export default class Repartition extends React.PureComponent {


    render() {
        let row = [];
        for (let i = 0; i <= this.props.eleve; i++) {
            row.push(<ListStudents eleve={this.props.eleve}/>);
        }
            return (
                <div>
                    <Col span={12}>
                        <Card
                            title="default size card"
                            bordered={true}>
                            <li>{row}</li>

                        </Card>
                    </Col>
                </div>

            );
        }
}
