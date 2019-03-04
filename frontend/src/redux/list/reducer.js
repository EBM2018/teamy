import { ACTIONS } from "./constants";
import {combineReducers} from "redux";



export default combineReducers({
    map : (state= [], action) => {
        switch (action.type) {
            case ACTIONS.SET_LISTS :
                return action.list;
            case ACTIONS.POST_LIST :
                return state.concat(action.newList)
          case ACTIONS.GET_USERS_FROM_LIST :
              return action.users;
            default:
                return state
        }
    }
})


