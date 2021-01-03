import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
  } from "../constants";
  
  const initialState = {
    email: '',
    password: '',
    refreshing: true,
    error: null
  }
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case USER_LOGIN_SUCCESS:
        return {
          ...state,
          email: payload.email,
          password: payload.password,
          refreshing: false,
          error: null
        }
      case USER_LOGIN_FAIL:
        return {
          ...state,
          email: '',
          password: '',
          refreshing: false,
          error: payload
        }
      default:
        return state;
    }
  }