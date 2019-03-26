import {ACTIONS} from "../student/constants";
const request = require('superagent');

export const getStudents = () => async (dispatch) => {

  request
    .get('/api/users/students')
    .set('Accept', 'application/json')
    .then(res => {
      // Do something
      dispatch(GET_STUDENTS(res.body))
    }).catch(err => {
    console.log("error : ", err)
    // err.message, err.response
  });

}

export const modifyUser = (newUser) => async (dispatch) => {

  request
    .put('/api/users/'+newUser._id)
    .set('Accept', 'application/json')
    .send({
      "listGroup" : newUser.listGroup,
      "name" : newUser.name,
      "last_name" : newUser.last_name,
      "isProf" : newUser.isProf
    })
    .then(res => {
      // Do something
      console.log("newUser", res.body)
      dispatch(MODIFY_USER(res.body))
    }).catch(err => {
    console.log("error : ", err)
    // err.message, err.response
  });

}

export const GET_STUDENTS = (students) => ({
  type : ACTIONS.GET_STUDENTS,
  students,
})

export const MODIFY_USER = (students) => ({
  type : ACTIONS.MODIFY_USER,
  students,
})