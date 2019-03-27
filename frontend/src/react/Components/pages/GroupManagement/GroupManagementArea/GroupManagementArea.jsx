import React from 'react';
//import PropTypes from 'prop-types';
//import StudentGroup from '../StudentGroup/StudentGroup'
import classNames from './groupmanagementarea.module.css';
import { connect  } from 'react-redux'
//import {Link} from "react-router-dom";
import { getGroups, postGroup} from '../../../../../redux/group/actions'
import {
    Icon, Button, Input, AutoComplete,
} from 'antd';


const Option = AutoComplete.Option;


class GroupManagementArea extends React.PureComponent {

    componentWillMount() {
        this.props.getGroups()
    }

    state = {
        newGroup: "",
    };

    render() {
        return (
            <div className={classNames.groupmanagementcontainer}>
              <div className={classNames.addgroup}>
                <Input onKeyPress={this.addGroup} onInput={this.updateGroup} value={this.state.newGroup} type="text"
                       placeholder="Créer un Groupe"/>
                <Button onClick={this.addGroupByButton}>Créer une Groupe</Button>
              </div>
                <div>
                    <AutoComplete
                        className={classNames.searchbar}
                        placeholder="recherchez un Groupe"
                        optionLabelProp="text"
                        dataSource={this.props.groups.map(this.renderOption)}
                        filterOption={(inputValue, option) => {
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
            </div>
        )
    }

  renderOption = (item) => {
    return (
      <Option key={item._id} text={item.groupName} onClick={this.selectGroup}>
        {item.groupName}
      </Option>
    );
  }
    selectGroup= (idGroup) => {
        this.props.selectGroup(idGroup)
    }

    updateGroup = (e) => {
        this.setState({newGroup: (e.target).value})
    }

    addGroupByButton = () => {
      if (this.state.newGroup !== "") {
        this.props.postGroup(this.state.newGroup)
        this.selectGroup(this.state.newGroup)
        this.setState({
          newGroup: "",
        })
      }
    }
    addGroup = (e) => {
        if (e.key === 'Enter') {
            if (this.state.newGroup !== "") {
                this.props.postGroup(this.state.newGroup)
                this.selectGroup(this.state.newGroup)
                this.setState({
                    newGroup: "",
                })
            }
        }
    }

}


const mapStateToProps = state  => ({
        groups : state.groups.map,
    }
)

const mapDispatchToProps = {
    getGroups,
    postGroup,
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupManagementArea)