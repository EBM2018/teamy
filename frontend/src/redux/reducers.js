import { combineReducers } from 'redux'
import listReducer from './list/reducer'
import studentReducer from './student/reducer'


export default combineReducers({
    lists : listReducer,
    users : studentReducer,

})