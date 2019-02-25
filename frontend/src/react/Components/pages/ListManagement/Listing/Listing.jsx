import React from 'react';
//import PropTypes from 'prop-types';
import classNames from './listing.module.css';
import { connect  } from 'react-redux'
//import {Link} from "react-router-dom";
import { getLists, postList} from '../../../../../redux/list/actions'
import {
    Icon, Button, Input, AutoComplete,
} from 'antd';
const Option = AutoComplete.Option;

function renderOption(item) {
    return (
        <Option key={item} text={item}>
            {item}
        </Option>
    );
}

class Listing extends React.PureComponent {

    componentWillMount(){
        this.props.getLists()
    }

    state = {
        newList: "",
    }

    render() {
        return (
            <div className={classNames.globalsearchwrapper} >
                <div >
                    <AutoComplete
                        className={classNames.searchbar}
                        placeholder="input here"
                        optionLabelProp="text"
                        dataSource={this.props.lists.map(renderOption)}
                        filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                    >
                        <Input className={classNames.input}
                            suffix={(
                                <Button type="primary">
                                    <Icon type="search" />
                                </Button>
                            )}
                        />
                    </AutoComplete>
                </div>
                <div className={classNames.addlist}>
                    <Input onKeyPress={this.addList} onInput={this.updateList} value={this.state.newList} type="text" placeholder="Add an Item"/>
                    <Button onClick={this.addList}>Add</Button>
                </div>
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