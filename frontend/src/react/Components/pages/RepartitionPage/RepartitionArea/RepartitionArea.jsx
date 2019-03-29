import React from 'react';
//import PropTypes from 'prop-types';
//import classNames from './RepartitionsArea.module.css';
import Repartition from '../Repartition/Repartition'



export default class RepartitionsArea extends React.PureComponent {


    render(){
        let row = [];
        for(let i = 1; i<=this.props.nbRepartition; i++) {
            row.push(<Repartition key={i} setUnUsedStudents={this.setUnUsedStudents} unusedStudents={this.props.students} nbEleve={this.props.nbEleve}/>)
        }
            return (
                <div>

                    <h1>{row}</h1>
                </div>

            )
    }
    setUnUsedStudents = (students) => {
        this.props.getUnusedStudents(students)
    }
}