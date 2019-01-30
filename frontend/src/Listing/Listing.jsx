import React from 'react';
import PropTypes from 'prop-types';
import classNames from './listing.module.css';

import Select_Mode from '../Select_Mode/Select_Mode'
import {Link} from "react-router-dom";
import Listing_Item from '../Listing_Item/Listing_Item'




export default class Listing extends React.PureComponent {

    render(){
        return (
            <div>
                <Select_Mode/>
                <input type="text" placeholder="Search for names.."/>
                <ul>
                    <Listing_Item/>
                </ul>
                <input type="text" placeholder="Add an Item"/>
                <button>Add</button>
            </div>
        )
    }
}