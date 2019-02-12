import React from 'react';
//import PropTypes from 'prop-types';
//import classNames from './listing.module.css';

import SelectMode from '../../../generic/SelectMode/SelectMode'
import { connect  } from 'react-redux'
//import {Link} from "react-router-dom";
import ListingItem from '../ListingItem/ListingItem'
import { getLists, postList} from '../../../../../redux/list/actions'




class Listing extends React.PureComponent {

    componentWillMount(){
        this.props.getLists()
    }

    state = {
        newList: "",
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Search for names.."/>
                <ul>
                    {this.props.lists.map(listName => {
                        return (<ListingItem listName={listName}/>)
                    })}


                </ul>
                <input onKeyPress={this.addList} onInput={this.updateList} value={this.state.newList} type="text" placeholder="Add an Item"/>
                <button onClick={this.addList}>Add</button>
            </div>
        )
    }


    updateList = (e) => {
        console.log(this.state.lists)
        this.setState({newList: (e.target).value}, () => {
            console.log(this.state.newList)
        })
    }
    addList = (e) => {
        console.log(e)
        if (e.key === 'Enter') {
            if (this.state.newList !== "") {
                this.props.postList(this.state.newList)
                this.setState({
                    newList: "",
                })
            }


        }
    }



}

const mapStateToProps = state  => ({
        lists : state.lists.map
    }
)

const mapDispatchToProps = {
    getLists,
    postList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing)