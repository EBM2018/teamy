import React from 'react';
import { Button } from 'antd';
//import PropTypes from 'prop-types';
import classNames from './selecttypegroup.module.css';



export default class SelectTypeGroup extends React.PureComponent {


    render(){
        return (
            <div className={classNames.buttons}>
                <Button type="ghost" icon="download">Récuperer Groupe</Button>
                <Button type="ghost" icon="sync">Créer Aléatoirement</Button>
                <Button type="ghost" icon="edit">Créer Manuellement</Button>
                <Button type="ghost" icon="user">Laisser les élèves</Button>
            </div>
        )
    }
}