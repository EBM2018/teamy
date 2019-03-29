import { ACTIONS } from "./constants";
import {combineReducers} from "redux";



export default combineReducers({
    map : (state= [], action) => {
        switch (action.type) {
          case ACTIONS.UPDATE_GROUP :
              return action.updatedGroup;
          case ACTIONS.GET_GROUP_BY_ID :
              console.log("group", action.group)
              return state.concat(action.group);
            default:
                return state
        }
    }
})


