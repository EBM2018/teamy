import React from 'react';
import {Card, Col} from 'antd'
import ListStudents from "../ListStudents/ListStudents";
import classNames from "./repartition.module.css";




export default class Repartition extends React.PureComponent {


    render() {
        let row = [];
        for (let i = 0; i <= this.props.eleve; i++) {
            row.push(<ListStudents eleve={this.props.eleve}/>);
        }
            return (
                <div >
                    <Col span={12}  >
                        <Card  className={classNames.cardstyle}
                            title="Name"
                            bordered={true}
                            >
                            <li>{row}</li>

                        </Card>
                    </Col>
                </div>

            );
        }
}
