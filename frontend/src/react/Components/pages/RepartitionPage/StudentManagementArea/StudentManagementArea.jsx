import React from 'react';
import {
    AutoComplete, Button, Icon, Input
} from "antd";

import classNames from '../StudentManagementArea/studentManagementArea.module.css';
import { connect  } from 'react-redux'
import { getGroups} from '../../../../../redux/group/actions'
import ListGroupStudentRepartition from "../ListGroupStudentRepartition/ListGroupStudentRepartition"

const Option = AutoComplete.Option;

class StudentManagementArea extends React.PureComponent {

    componentWillMount() {
        this.props.getGroups()
    }



    render(){
        return (
            <div>
                <div>
                    <AutoComplete
                        className={classNames.searchbar}
                        placeholder="recherchez une Groupe"
                        optionLabelProp="text"
                        dataSource={this.props.groups.map(this.renderOption)}
                        filterOption={(inputValue, option) => {
                            console.log("Groupedata", this.props.groups);
                            console.log("option", option.props.children);
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
                <ListGroupStudentRepartition/>
            </div>

        )
    }
    renderOption = (item) => {
        return (
            <Option key={Number(item.id_repartition)} text={item.label_repartition} >
                {item.label_repartition}
            </Option>
        );
    };
    selectGroup= (idGroup) => {
        console.log("selected Group", idGroup)
        this.props.selectGroup(idGroup)
    }


}


const mapStateToProps = state  => ({
        groups : state.groups.map,
    }
);

const mapDispatchToProps = {
    getGroups,

};

export default connect(mapStateToProps, mapDispatchToProps)(StudentManagementArea)