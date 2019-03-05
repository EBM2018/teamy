import React from "react";
//import classNames from './studentitem.module.css'

export default class StudentItem extends React.PureComponent {


  state = {
    newList: "",
  }

  render() {
    return (
      <div>
          <h1>{this.props.name}</h1>
          <p>{this.props.lastname}</p>
      </div>
    )
  }
}

