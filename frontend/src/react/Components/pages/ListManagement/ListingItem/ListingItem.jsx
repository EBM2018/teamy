import React from 'react';
//import PropTypes from 'prop-types';
//import classNames from './listingItem.module.css';
import {Link} from "react-router-dom";





export default class ListingItem extends React.PureComponent {

    render(){
        return (
            <li><Link to="/Liste?id=1">{this.props.listName}</Link></li>
        )
    }
}
