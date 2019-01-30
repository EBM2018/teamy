import React from 'react';
//import PropTypes from 'prop-types';
//import classNames from './listing.module.css';

import SelectMode from '../SelectMode/SelectMode'
//import {Link} from "react-router-dom";
import ListingItem from '../ListingItem/ListingItem'




export default class Listing extends React.PureComponent {

    render(){
        return (
            <div>
                <SelectMode/>
                <input type="text" placeholder="Search for names.."/>
                <ul>
                    <ListingItem/>
                </ul>
                <input type="text" placeholder="Add an Item"/>
                <button>Add</button>
            </div>
        )
    }
}