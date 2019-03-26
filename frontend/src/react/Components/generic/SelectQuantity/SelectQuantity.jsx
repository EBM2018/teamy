import React from 'react';
import {Slider} from 'antd';
//import PropTypes from 'prop-types';
import classNames from './selectquantity.module.css';



export default class SelectQuantity extends React.PureComponent {
    colCounts = {};
    studcolCounts = {};

  state = {
    colCountKey: 2,
    studcolCountKey: 0,
  };

    componentWillMount(){
        this.defaultRepartitionSize()
    }


    constructor() {
        super();


        [0, 1, 2, 3, 4, 5, 6, 7, 8].forEach((value, i) => { this.colCounts[i] = value; });
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((value, i) => { this.studcolCounts[i] = value; });
        }
        onStudColCountChange = (studcolCountKey) => {
            this.props.onStudColCountChange(studcolCountKey);
            this.setState({ studcolCountKey: studcolCountKey });

        }
        onColCountChange = (colCountKey) => {
            this.adaptRepartitionSize(colCountKey)
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

    adaptRepartitionSize = (nbRepartition) => {
      let studcolCountKey;
      if (this.props.students.length%nbRepartition === 0){
        studcolCountKey = this.props.students.length / nbRepartition
      } else{
        studcolCountKey = (this.props.students.length + nbRepartition - this.props.students.length%nbRepartition) / nbRepartition
      }
        this.onStudColCountChange(studcolCountKey)
    }

    defaultRepartitionSize = () => {
       console.log("nb students", this.props.students.length);
      let studcolCountKey;
      if (this.props.students.length%this.state.colCountKey === 0){
         studcolCountKey = this.props.students.length / this.state.colCountKey
      } else{
         studcolCountKey = (this.props.students.length + this.state.colCountKey - this.props.students.length%this.state.colCountKey) / this.state.colCountKey
      }


      console.log("nb students par groupe", studcolCountKey)
      this.onStudColCountChange(studcolCountKey)
      /*this.setState({
        studcolCountKey: studcolCountKey,
      })*/
    }

}