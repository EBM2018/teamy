import React from 'react';
//import PropTypes from 'prop-types';
import StudentList from '../StudentList/StudentList'
import classNames from './listing.module.css';
import ListManagementArea from '../ListManagementArea/ListManagementArea'
import {getUsersFromList} from '../../../../../redux/student/actions'
import connect from "react-redux/es/connect/connect";


class Listing extends React.PureComponent {


    render() {
      console.log("usersinlisting", this.props.users)
        return (
            <div className={classNames.globalsearchwrapper} >
                <ListManagementArea selectList={this.selectList}/>
                <StudentList users={this.props.users}/>
            </div>
        )
    }

    selectList= () =>{
      this.props.getUsersFromList()
    }

}


const mapStateToProps = state  => ({
    users : state.users.map,
  }
)

const mapDispatchToProps = {
  getUsersFromList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing)