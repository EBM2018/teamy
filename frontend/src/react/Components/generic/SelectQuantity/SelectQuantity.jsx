import React from 'react';
import {Slider} from 'antd';
//import PropTypes from 'prop-types';
import classNames from './selectquantity.module.css';



export default class SelectQuantity extends React.PureComponent {
    colCounts = {};
    studcolCounts = {};
    state = {
        colCountKey: 2,
        studcolCountKey: 2,
    };
    constructor() {
        super();


        [1, 2, 3, 4, 5, 6, 7, 8].forEach((value, i) => { this.colCounts[i] = value; });
        [1,2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((value, i) => { this.studcolCounts[i] = value; });
        }
        onStudColCountChange = (studcolCountKey) => {
            this.props.onStudColCountChange(studcolCountKey);
            this.setState({ studcolCountKey: studcolCountKey });
        }
        onColCountChange = (colCountKey) => {
            this.props.onColCountChange(colCountKey);
            this.setState({ colCountKey: colCountKey });
    }


    render(){
        const { colCountKey, studcolCountKey} = this.state;



        return (

            <div className={classNames.slides}>
                <div className={classNames.boxslide}>
                    <p className={classNames.titre}> Choix du nombre de groupe </p>
                    <Slider
                        min={1}
                        max={Object.keys(this.colCounts).length - 1}
                        value={colCountKey}
                        tooltipVisible={false}
                        onChange={this.onColCountChange}
                        marks={this.colCounts}
                        step={null}
                    />
                </div>
                <div className={classNames.boxslide}>
                    <p className={classNames.titre}> Choix du nombre d'élève </p>
                    <Slider
                        min={0}
                        max={Object.keys(this.studcolCounts).length-1}
                        value={studcolCountKey}
                        tooltipVisible={false}
                        onChange={this.onStudColCountChange}
                        marks={this.studcolCounts}
                        step={null}
                    />
                </div>
            </div>
        )
    }
}