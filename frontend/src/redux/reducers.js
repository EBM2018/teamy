import { combineReducers } from 'redux'
import groupReducer from './group/reducer'
import studentReducer from './student/reducer'


export default combineReducers({
    groups : groupReducer,
    users : studentReducer,

})