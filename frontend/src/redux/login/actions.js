import { ACTIONS } from "./constants";

export const CHECK_USER_STATUS = (isLogIn) => ({
    type: ACTIONS.CHECK_USER_STATUS,
    isLogIn
})


export const checkUserStatus = () => async (dispatch) => {

    //TODO : brancher la variable list à l'API
    let isLogIn = true;

    dispatch(CHECK_USER_STATUS(isLogIn))
}



