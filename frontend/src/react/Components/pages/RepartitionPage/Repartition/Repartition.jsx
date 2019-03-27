import React from 'react';
import {Card, Col} from 'antd'
import ListStudents from "../ListStudents/ListStudents";
import classNames from "./repartition.module.css";
import { Select, Button} from 'antd';

const Option = Select.Option;

//const children = [];


export default class Repartition extends React.PureComponent {

  state={
    children : [],
    selectedItems : [],
    submittedStudents : [],
  }

    componentWillMount(){
      let children = this.renderOption();
      this.setState({
        children: children,
      })
    }

    handleChange = (value) => {
      console.log(`selected ${value}`);
      let selectedItems = value;
      //selectedItems.push(value);

      this.setState({
        selectedItems: selectedItems,
      })
    }


    render() {
        let row = [];
        for (let i = 0; i <= this.props.nbEleve-1; i++) {
            console.log(this.state.submittedStudents, "student added", this.props.nbEleve, i, this.state.submittedStudents[i])
            row.push(<ListStudents student={this.state.submittedStudents[i]} eleve={this.props.nbEleve}/>);
        }

            return (
                <div >
                    <Col span={12}  >
                        <Card  className={classNames.cardstyle}
                            title="Name"
                            bordered={true}
                            >
                          <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Please select"
                            onChange={this.handleChange}
                          >
                            {this.state.children}
                          </Select><Button onClick={this.addStudentToRepartition}>Ajouter au groupe</Button>

                          <li>{row}</li>

                        </Card>
                    </Col>
                </div>

            );
        }

      addStudentToRepartition = () => {

        let submittedStudents = [];
        this.state.selectedItems.map((item) => {
          submittedStudents.push(this.props.students.filter(t => t._id === String(item)))
          return null;
        });
        if(this.state.selectedItems !== []){
            this.setState({
              submittedStudents: submittedStudents,
            })

        }
      }
      renderOption = () => {
        let children = [];
        this.props.students.map((item) => {
          children.push(<Option key={item._id} text={item.name + " " + item.last_name}>{item.name + " " +item.last_name}</Option>);
          return children;
        })
        return children;
      }
}
