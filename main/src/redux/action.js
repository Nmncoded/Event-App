import {USER_INFO, LOGOUT, ALL_USERS } from "./actionTypes";

export const updateUserInfo = (data) => {
  return {
    type: USER_INFO,
    payload: data
  }
}

export const updateAllUsers = (data) => {
  return {
    type: ALL_USERS,
    payload: data
  }
}


export const logoutUser = () => {
  return {
    type: LOGOUT
  }
}
