import React from 'react';
import { Button } from 'antd';
//import PropTypes from 'prop-types';
import classNames from './selecttyperepartition.module.css';



export default class SelectTypeRepartition extends React.PureComponent {


    render(){
        return (
            <div className={classNames.buttons}>
                <Button type="ghost" icon="sync">Créer Aléatoirement</Button>
            </div>
        )
    }
}