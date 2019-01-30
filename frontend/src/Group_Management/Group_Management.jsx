import React from 'react';
import PropTypes from 'prop-types';
import classNames from './group_management.module.css';

import Select_Mode from '../Select_Mode/Select_Mode'
import Select_Quantity from '../Select_Quantity/Select_Quantity'
import Groups_area from '../Groups_area/Groups_area'
import Student_Management_Area from '../Student_Management_Area/Student_Management_Area'




export default class Group_Management extends React.PureComponent {

render(){
    return (
        <div>
            <Select_Mode/>
            <Select_Quantity/>
            <Groups_area/>
            <Student_Management_Area/>

        </div>
    )
}
}