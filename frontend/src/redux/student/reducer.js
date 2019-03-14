import { ACTIONS } from "./constants";
import {combineReducers} from "redux";



export default combineReducers({
  map : (state= [], action) => {
    switch (action.type) {
      case ACTIONS.GET_STUDENTS :
        return action.students;
      default:
        return state
    }
  }
})

