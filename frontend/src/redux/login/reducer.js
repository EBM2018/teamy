import { ACTIONS } from "./constants";
import {combineReducers} from "redux";



export default combineReducers({
    map : (state= [], action) => {
        switch (action.type) {
            case ACTIONS.CHECK_USER_STATUS :
                return action.isLogIn;
            default:
                return state
        }
    }
})


