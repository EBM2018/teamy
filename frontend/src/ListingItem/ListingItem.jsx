import React from 'react';
//import PropTypes from 'prop-types';
//import classNames from './listingItem.module.css';

//import SelectMode from '../SelectMode/SelectMode'
import {Link} from "react-router-dom";
import { List } from 'antd';





export default class ListingItem extends React.PureComponent {

    render(){
        return (
            <List bordered >
                <Link to="/Liste?">{this.props.listName}</Link>
            </List>

        )
    }
}
