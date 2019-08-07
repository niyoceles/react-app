import {combineReducers} from 'redux'
import userReducer from './userReducers';

export default combineReducers({
    remoteUsers: userReducer,
    newUser: userReducer,
})