import React from 'react';
//import PropTypes from 'prop-types';
//import classNames from './RepartitionsArea.module.css';
import Repartition from '../Repartition/Repartition'



export default class RepartitionsArea extends React.PureComponent {

    render(){
        let row = [];
        for(let i = 0; i<=this.props.nbRepartition; i++) {
            row.push(<Repartition eleve={this.props.nbEleve}/>)
        }
            return (
                <h1>{row}</h1>
            )
    }
}