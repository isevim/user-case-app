import {
  SET_USER,
  SET_USER_GET_REQUEST_LOADING,
  SET_USER_GET_REQUEST_SUCCESS,
  SET_USER_GET_REQUEST_ERROR,
} from "./userActionTypes";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setUserGetRequestLoading = () => ({
  type: SET_USER_GET_REQUEST_LOADING,
});

export const setUserGetRequestSuccess = (data) => ({
  type: SET_USER_GET_REQUEST_SUCCESS,
  payload: data,
});

export const setUserGetRequestError = (error) => ({
  type: SET_USER_GET_REQUEST_ERROR,
  payload: error,
});
