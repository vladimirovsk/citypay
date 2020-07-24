 import {combineReducers} from 'redux'
 import authReducer from './auth'
 import workReducer from "./works";

 export default combineReducers({
  auth:authReducer,
  work:workReducer
 })
