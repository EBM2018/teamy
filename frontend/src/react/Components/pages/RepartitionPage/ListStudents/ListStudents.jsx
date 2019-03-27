import React from 'react';

export default class ListStudents extends React.PureComponent{

    setStudent = () => {
        if(this.props.student){
            let value = ""
          this.props.student.map((item) => {
              console.log("item", item.name)
            value = String(item.name + " " +item.last_name)
            return value
          })
          return value
        }else{
          return ("_____")
        }
      };

    render (){
      return <li>{this.setStudent()}</li>
    }
}