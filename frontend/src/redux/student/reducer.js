import { ACTIONS } from "./constants";
import {combineReducers} from "redux";



export default combineReducers({
  map : (state= [], action) => {
    switch (action.type) {
      case ACTIONS.GET_USERS_FROM_GROUP :
        return action.users;
      default:
        return state
    }
  }
})

