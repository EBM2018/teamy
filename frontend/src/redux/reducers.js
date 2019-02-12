import { combineReducers } from 'redux'
import listReducer from './list/reducer'

export default combineReducers({
    lists : listReducer,

})