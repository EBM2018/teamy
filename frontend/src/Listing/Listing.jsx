import React from 'react';
//import PropTypes from 'prop-types';
//import classNames from './listing.module.css';

import SelectMode from '../SelectMode/SelectMode'
//import {Link} from "react-router-dom";
import ListingItem from '../ListingItem/ListingItem'
//import { List } from '../../actions'



export default class Listing extends React.PureComponent {
    state = {
        newList: "",
        lists: [],
    };

    render() {
        return (
            <div>
                <SelectMode/>
                <input type="text" placeholder="Search for names.."/>
                <ul>
                    {this.state.lists.map(listName => {
                        return (<ListingItem listName={listName}/>)
                    })}


                </ul>
                <input onKeyPress={this.addList} onInput={this.updateList} value={this.state.newList} type="text" placeholder="Add an Item"/>
                <button onClick={this.addList}>Add</button>
            </div>
        )
    }


    updateList = (e) => {
        console.log(this.state.lists);
        this.setState({newList: (e.target).value}, () => {
            console.log(this.state.newList)
        })
    };
    addList = (e) => {
        console.log(e);
        if (e.key === 'Enter') {
            if (this.state.newList !== "") {

                let copyNewList = this.state.newList;
                let copyLists = [...this.state.lists];
                copyLists.push(copyNewList);
                this.setState({lists : copyLists,
                    newList : "",
                }, () => {
                    console.log("lists", this.state.newList)
                })
            }
        }
    }
}