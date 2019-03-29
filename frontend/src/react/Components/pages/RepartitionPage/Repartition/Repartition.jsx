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
    unusedStudents:[],
  }


    handleChange = (value) => {
      let selectedItems = value;
      this.setState({
        selectedItems: selectedItems,
      })
    }


    render() {
        let row = [];
        for (let i = 0; i <= this.props.nbEleve-1; i++) {
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
                            {this.renderOption()}
                          </Select><Button onClick={this.addStudentToRepartition}>Ajouter au groupe</Button>

                          <li>{row}</li>

                        </Card>
                    </Col>
                </div>

            );
        }

      addStudentToRepartition = () => {
        let submittedStudents = [];
        let unusedStudents = [...this.props.unusedStudents];
        console.log("selected", this.state.selectedItems.length, "nbEleve ", this.props.nbEleve)
        if(this.state.selectedItems.length <= this.props.nbEleve) {
          this.state.selectedItems.map((item) => {
            submittedStudents.push(this.props.unusedStudents.filter(t => t._id === String(item)))
            unusedStudents = unusedStudents.filter(t => t._id !== String(item))
            return null;
          });


          if (this.state.selectedItems !== []) {
            this.setState({
              submittedStudents: submittedStudents,

            }, () => {
              this.props.setUnUsedStudents(unusedStudents);
            })

          }
        }else{
          console.log("vous dépassez la capacité de ce groupe")
        }
      }
      renderOption = () => {
        let children = [];
          this.props.unusedStudents.map((item) => {
            children.push(<Option key={item._id} text={item.name + " " + item.last_name}>{item.name + " " +item.last_name}</Option>);
            return children;
          });
        return children
      }
}
