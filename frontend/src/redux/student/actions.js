import {data_users} from "../../__mock-data__/data_users";
import {ACTIONS} from "../student/constants";

export const getUsersFromList = () => async (dispatch) => {

  //TODO : brancher la variable list à l'API
  const users = data_users.data
  dispatch(GET_USERS_FROM_LIST(users))
}

export const GET_USERS_FROM_LIST = (users) => ({
  type : ACTIONS.GET_USERS_FROM_LIST,
  users
})