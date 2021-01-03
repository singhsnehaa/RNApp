import axios from 'axios';
import {
  USER_INFO_SUCCESS,
  USER_INFO_FAIL, USER_REPO_SUCCESS, USER_REPO_FAIL,
} from "../constants";

// Login user


export const userInfo = username => async dispatch => {

  try {
    const url = `https://api.github.com/users/${username}`;
    console.log("api url ==>", url);
    const res = await axios.get(url);
    //console.log("res data [userInof action] =>", res.data);
    dispatch({
      type: USER_INFO_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    //console.log("Error (githubDetail action):---", err);
    dispatch({
      type: USER_INFO_FAIL,
      payload: err.response
    });
  }
}


export const getUserRepo = username => async dispatch => {

  try {
    const url = `https://api.github.com/users/${username}/repos`;
    console.log("repo api url ==>", url);
    const res = await axios.get(url);
    console.log("repo data [userRepo action] =>", res.data);
    dispatch({
      type: USER_REPO_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    console.log("Error (USERREPO action):---", err);
    dispatch({
      type: USER_REPO_FAIL,
      payload: err.response
    });
  }
}