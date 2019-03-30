import { ACTIONS } from "./constants";
const request = require('superagent');
let isLogIn = false;

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
    console.log("bfbfbf", isLogIn)

  request
    .post('/auth/registration')
    .send({
      "name": values.nickname,
      "last_name": values.name,
      "email": values.email,
      "isProf": values.isProf,
      "pwd": values.password
    })
    .set('Accept', 'application/json')
    .then(res => {
      isLogIn = true;
      dispatch(REGISTER_USER(res.body))
    });
    //dispatch(REGISTER_USER(isLogIn))
}

export const connectUser = (values) => async (dispatch) => {

    //TODO : brancher la connexion à l'API
  request
    .post('/auth/login')
    .send({
      "email": values.email,
      "pwd": values.password
    })
    .set('Accept', 'application/json')
    .then(res => {
      isLogIn = true;
      dispatch(CONNECT_USER(isLogIn))
    });
    //dispatch(CONNECT_USER(isLogIn))
}

export const checkUserStatus = () => async (dispatch) => {

    //TODO : brancher le checkUserStatus à l'API
    dispatch(CHECK_USER_STATUS(isLogIn))
}



