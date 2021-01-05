import {combineReducers} from 'redux';
import authLogin from "./authLogin";
import userList from "./UserList";

export default combineReducers({
    authLogin,
    userList
});
