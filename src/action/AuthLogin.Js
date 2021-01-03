import axios from 'axios';
import { USER_LOGIN_SUCCESS,  USER_LOGIN_FAIL, } from "../constants";

// Login user


export const userLogin = (email, password) => dispatch => {

    if (email && password) {
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: {email, password}
        });
    } else {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: {message: 'Someting went wrong'}
        });
    }


}


