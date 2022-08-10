import {
    SET_ADMIN,
    SET_ADMIN_GET_REQUEST_LOADING,
    SET_ADMIN_GET_REQUEST_SUCCESS,
    SET_ADMIN_GET_REQUEST_ERROR,
  } from "./userActionTypes";
  
  export const setAdmin = (admin) => ({
    type: SET_ADMIN,
    payload: admin,
  });
  
  export const setAdminGetRequestLoading = () => ({
    type: SET_ADMIN_GET_REQUEST_LOADING,
  });
  
  export const setAdminGetRequestSuccess = (data) => ({
    type: SET_ADMIN_GET_REQUEST_SUCCESS,
    payload: data,
  });
  
  export const setAdminGetRequestError = (error) => ({
    type: SET_ADMIN_GET_REQUEST_ERROR,
    payload: error,
  });