import {data_users} from "../../__mock-data__/data_users";
import {ACTIONS} from "../student/constants";

export const getUsersFromGroup = () => async (dispatch) => {

  //TODO : brancher la variable list à l'API
  const users = data_users.data
  dispatch(GET_USERS_FROM_GROUP(users))
}

export const GET_USERS_FROM_GROUP = (users) => ({
  type : ACTIONS.GET_USERS_FROM_GROUP,
  users
})