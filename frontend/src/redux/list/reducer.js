import { ACTIONS } from "./constants";
import {combineReducers} from "redux";



export default combineReducers({
    map : (state= [], action) => {
        switch (action.type) {
            case ACTIONS.SET_LISTS :
                console.log("coucou")
                return action.list
            case ACTIONS.POST_LIST :

                return state.concat(action.newList)
            default:
                return state
        }
    }
})


