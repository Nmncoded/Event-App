import {USER_INFO, LOGOUT, ALL_USERS } from "./actionTypes"

const initialState = {
  userInfo: null,
  allUsers: null,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case USER_INFO: {
      return {
        ...state,
        userInfo: action.payload
      }
    }
    case ALL_USERS: {
      return {
        ...state,
        allUsers: action.payload
      }
    }
    case LOGOUT: {
      localStorage.clear();
      return {
        ...initialState
      }
    }
    default: {
      return {...state};
    }
  }
}

export default reducer;