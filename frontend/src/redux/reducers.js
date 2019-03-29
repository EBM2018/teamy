import { combineReducers } from 'redux'
import groupReducer from './group/reducer'
import studentReducer from './student/reducer'
import loginReducer from './login/reducer'
import repartitionReducer from './repartition/reducer'

export default combineReducers({
    groups : groupReducer,
    students : studentReducer,
    isLogIn : loginReducer,
    repartition : repartitionReducer,

})