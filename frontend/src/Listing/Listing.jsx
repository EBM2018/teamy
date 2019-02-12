import React from 'react';
//import PropTypes from 'prop-types';
//import classNames from './listing.module.css';


//import {Link} from "react-router-dom";
import ListingItem from '../ListingItem/ListingItem'
import {Affix} from "antd";
//import { List } from '../../actions'



export default class Listing extends React.PureComponent {
    state = {
        newList: "",
        lists: [],
        top: 10
    };

    render() {
        return (
            <div>

                <Affix offsetTop={this.state.top}>
                <input type="text" placeholder="Search for names.."/>
                    <input onKeyPress={this.addList} onInput={this.updateList} value={this.state.newList} type="text" placeholder="Add an Item"/>
                    <button onClick={this.addList}>Add</button>
                </Affix>
                <ul>
                    {this.state.lists.map(listName => {
                        return (<ListingItem listName={listName}/>)
                    })}
                </ul>
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