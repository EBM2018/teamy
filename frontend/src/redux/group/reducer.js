import { ACTIONS } from "./constants";
import {combineReducers} from "redux";



export default combineReducers({
    map : (state= [], action) => {
        switch (action.type) {
            case ACTIONS.SET_GROUPS :
                return action.group;
            case ACTIONS.POST_GROUP :
                return state.concat(action.newGroup)
            default:
                return state
        }
    }
})


