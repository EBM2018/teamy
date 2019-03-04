import React from 'react';
import {Slider} from 'antd';
//import PropTypes from 'prop-types';
import classNames from './selectquantity.module.css';



export default class SelectQuantity extends React.PureComponent {
    colCounts = {};
    constructor() {
        super();
        this.state = {
            colCountKey: 2,
        };

        [ 1, 2, 3, 4, 5, 6, 7, 8].forEach((value, i) => { this.colCounts[i] = value; });
    }
    onColCountChange = (colCountKey) => {
        this.props.onColCountChange(colCountKey)
        this.setState({ colCountKey });
    }

    render(){
        const { colCountKey } = this.state;



        return (

            <div className={classNames.slides}>
                <div className={classNames.boxslide}>
                    <p className={classNames.titre}> Choix du nombre de groupe </p>
                    <Slider
                        min={1}
                        max={Object.keys(this.colCounts).length - 1}
                        value={colCountKey}
                        onChange={this.onColCountChange}
                        marks={this.colCounts}
                        step={null}
                    />
                </div>
                <div className={classNames.boxslide}>
                    <p className={classNames.titre}> Choix du nombre d'élève </p>
                    <Slider max={12}  step={1} defaultValue={2} tooltipVisible={true}/>
                </div>
            </div>
        )
    }
}