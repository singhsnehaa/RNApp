import {
    USERS_LIST_SUCCESS,
    USERS_LIST_FAIL,
  } from "../constants";
  
  const initialState = {
   users:[],
    refreshing: true,
    error: null
  }
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case USERS_LIST_SUCCESS:
        return {
          ...state,
          users: payload,
          refreshing: false,
          error: null
        }
      case USERS_LIST_FAIL:
        return {
          ...state,
          users: [],
          refreshing: false,
          error: payload
        }
      default:
        return state;
    }
  }