import React from 'react';
//import PropTypes from 'prop-types';
import StudentGroup from '../StudentGroup/StudentGroup'
import classNames from './grouping.module.css';
import GroupManagementArea from '../GroupManagementArea/GroupManagementArea'
import {getUsersFromGroup} from '../../../../../redux/student/actions'
import { connect  } from 'react-redux'


class Grouping extends React.PureComponent {


    render() {
        return (
            <div className={classNames.globalsearchwrapper} >
                <GroupManagementArea selectGroup={this.selectGroup}/>
                <StudentGroup users={this.props.users}/>
            </div>
        )
    }

    selectGroup= () =>{
      this.props.getUsersFromGroup()
    }

}


const mapStateToProps = state  => ({
    users : state.users.map,
  }
)

const mapDispatchToProps = {
  getUsersFromGroup,
}

export default connect(mapStateToProps, mapDispatchToProps)(Grouping)