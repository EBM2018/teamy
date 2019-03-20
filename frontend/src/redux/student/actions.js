//import {data_users} from "../../__mock-data__/data_users";
import {ACTIONS} from "../student/constants";
//const nocache = require('superagent-no-cache');
const request = require('superagent');
//const prefix = require('superagent-prefix')('/static');

export const getStudents = () => async (dispatch) => {

  //TODO : brancher la variable list à l'API
  //const students = data_users.data
  //http://localhost:4000/api/users/students

  request
    .get('/api/users/students')
    .set('Accept', 'application/json')
    .then(res => {
      // Do something
      console.log("students", res.body)
      dispatch(GET_STUDENTS(res.body))
    }).catch(err => {
    console.log("error : ", err)
    // err.message, err.response
  });

}

export const GET_STUDENTS = (students) => ({
  type : ACTIONS.GET_STUDENTS,
  students,
})