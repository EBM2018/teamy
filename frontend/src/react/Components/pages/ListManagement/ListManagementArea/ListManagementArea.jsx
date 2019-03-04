import React from 'react';
//import PropTypes from 'prop-types';
//import StudentList from '../StudentList/StudentList'
import classNames from './listmanagementarea.module.css';
import { connect  } from 'react-redux'
//import {Link} from "react-router-dom";
import { getLists, postList} from '../../../../../redux/list/actions'
import {
    Icon, Button, Input, AutoComplete,
} from 'antd';


const Option = AutoComplete.Option;


class ListManagementArea extends React.PureComponent {

    componentWillMount() {
        this.props.getLists()
    }

    state = {
        newList: "",
    }

    render() {
        return (
            <div className={classNames.listmanagementcontainer}>
                <div>
                    <AutoComplete
                        className={classNames.searchbar}
                        placeholder="input here"
                        optionLabelProp="text"
                        dataSource={this.props.lists.map(this.renderOption)}
                        filterOption={(inputValue, option) => {
                            console.log("listedata", this.props.lists)
                            console.log("option", option.props.children)
                            return option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }}
                    >
                        <Input className={classNames.input}
                               suffix={(
                                   <Button type="primary">
                                       <Icon type="search"/>
                                   </Button>
                               )}
                        />
                    </AutoComplete>
                </div>
                <div className={classNames.addlist}>
                    <Input onKeyPress={this.addList} onInput={this.updateList} value={this.state.newList} type="text"
                           placeholder="Add an Item"/>
                    <Button onClick={this.addList}>Add</Button>
                </div>
            </div>
        )
    }

  renderOption = (item) => {
    return (
      <Option key={Number(item.id_repartition)} text={item.label_repartition} onClick={this.selectList}>
        {item.label_repartition}
      </Option>
    );
  }
    selectList= (idList) => {
        console.log("selected list", idList)
        this.props.selectList(idList)
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
        lists : state.lists.map,
    }
)

const mapDispatchToProps = {
    getLists,
    postList,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListManagementArea)