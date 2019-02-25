import React from 'react';
//import PropTypes from 'prop-types';
import StudentList from '../StudentList/StudentList'
import classNames from './listing.module.css';
import ListManagementArea from '../ListManagementArea/ListManagementArea'



export default class Listing extends React.PureComponent {


    render() {
        return (
            <div className={classNames.globalsearchwrapper} >
                <ListManagementArea/>
                <StudentList/>
            </div>
        )
    }

}

