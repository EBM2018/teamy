import {data_users} from "../../__mock-data__/data_users";
import {ACTIONS} from "../student/constants";

export const getStudents = () => async (dispatch) => {

  //TODO : brancher la variable list à l'API
  const students = data_users.data
  dispatch(GET_STUDENTS(students))
}

export const GET_STUDENTS = (students) => ({
  type : ACTIONS.GET_STUDENTS,
  students,
})