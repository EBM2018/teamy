import { ACTIONS } from "./constants";

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

export const registerUser = () => async  (dispatch) => {

    //TODO : brancher l'inscription à l'API
    let isLogIn = true;
    dispatch(REGISTER_USER(isLogIn))
}

export const connectUser = () => async (dispatch) => {

    //TODO : brancher la connexion à l'API
    let isLogIn = true;
    dispatch(CONNECT_USER(isLogIn))
}

export const checkUserStatus = () => async (dispatch) => {

    //TODO : brancher le checkUserStatus à l'API
    let isLogIn = true;

    dispatch(CHECK_USER_STATUS(isLogIn))
}



