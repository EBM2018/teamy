import React from 'react';
import PropTypes from 'prop-types';
import classNames from './listing_item.module.css';

import Select_Mode from '../Select_Mode/Select_Mode'
import {Link} from "react-router-dom";




export default class Listing_Item extends React.PureComponent {

    render(){
        return (
            <li><Link to="">Liste 1</Link></li>
        )
    }
}