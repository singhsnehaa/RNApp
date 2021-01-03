import {
    USER_INFO_SUCCESS,
    USER_INFO_FAIL, USER_REPO_SUCCESS,USER_REPO_FAIL
  } from "../constants";
  
  const initialState = {
    isLoadingUser: true,
    user: null,
    error: null,
    repos: null ,
    isRepoLoading: true,
  }
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case USER_INFO_SUCCESS:
        return {
          ...state,
          isLoadingUser: false,
          user: payload,
          error: null
        }
      case USER_INFO_FAIL:
        return {
          ...state,
          isLoadingUser: false,
          user: null,
          error: payload
        }

      case USER_REPO_SUCCESS:
        return{
          ...state,
          isRepoLoading: false,
          repos: payload,
          error: null
        } 
        
      case USER_REPO_FAIL:
        return{
          ...state,
          isRepoLoading: false,
          repos: null,
          error: payload
        }  
      default:
        return state;
    }
  }