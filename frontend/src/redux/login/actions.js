import { ACTIONS } from "./constants";
import {POST_GROUP} from "../group/actions";

export const CHECK_USER_STATUS = (isLogIn) => ({
    type: ACTIONS.CHECK_USER_STATUS,
    isLogIn
})
export const REGISTER_USER = (isLogIn) => ({
  type: ACTIONS.REGISTER_USER,
  isLogIn
})
export const CONNECT_USER = (isLogIn) => ({
  type: ACTIONS.CONNECT_USER,
  isLogIn
})

export const registerUser = (values) => async  (dispatch) => {

    //TODO : brancher l'inscription à l'API
    let isLogIn = true;
    console.log("bfbfbf", values)

  request
    .post('/auth/registration')
    .send({
      "groupName": newGroup,
      "seances": [],
    })
    .set('Accept', 'application/json')
    .then(res => {
      dispatch(POST_GROUP(res.body))
    });
    dispatch(REGISTER_USER(isLogIn))
}

export const connectUser = () => async (dispatch) => {

    //TODO : brancher la connexion à l'API
    let isLogIn = false;
    dispatch(CONNECT_USER(isLogIn))
}

export const checkUserStatus = () => async (dispatch) => {

    //TODO : brancher le checkUserStatus à l'API
    let isLogIn = true;

    dispatch(CHECK_USER_STATUS(isLogIn))
}



