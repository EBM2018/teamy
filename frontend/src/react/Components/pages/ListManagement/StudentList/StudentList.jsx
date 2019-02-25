import React from "react";
import classNames from './studentlist.module.css'

export default class StudentList extends React.PureComponent {


    state = {
        newList: "",
    }

    render() {
        return (
            <div className={classNames.listcontainer}>

            </div>
        )
    }
}

