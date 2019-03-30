import { ACTIONS } from "./constants";
import {combineReducers} from "redux";



export default combineReducers({
    map : (state= [], action) => {
        switch (action.type) {
          case ACTIONS.GET_SEANCE_FROM_GROUP :
              return action.seance;
            default:
                return state
        }
    }
})


