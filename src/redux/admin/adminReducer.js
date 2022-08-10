import {
    SET_ADMIN,
    SET_ADMIN_GET_REQUEST_LOADING,
    SET_ADMIN_GET_REQUEST_SUCCESS,
    SET_ADMIN_GET_REQUEST_ERROR,
  } from "./userActionTypes";
  
  const initialState = {
    admin: [],
    adminGetRequestLoading: false,
    adminGetRequestSuccess: false,
    adminGetRequestError: false,
    adminGetRequestErrorMessage: "",
  };
  
  const adminReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_ADMIN:
        return {
          ...state,
          admin: action.payload,
        };
  
      case SET_ADMIN_GET_REQUEST_LOADING:
        return {
          ...state,
          adminGetRequestLoading: true,
          adminGetRequestSuccess: false,
          adminGetRequestError: false,
          adminGetRequestErrorMessage: "",
        };
  
      case SET_ADMIN_GET_REQUEST_SUCCESS:
        return {
          ...state,
          adminGetRequestLoading: false,
          adminGetRequestSuccess: true,
          adminGetRequestError: false,
          adminGetRequestErrorMessage: "",
          admin: action.payload,
        };
  
      case SET_ADMIN_GET_REQUEST_ERROR:
        return {
          ...state,
          adminGetRequestLoading: false,
          adminGetRequestSuccess: false,
          adminGetRequestError: true,
          adminGetRequestErrorMessage: action.payload,
        };
      default:
        return state;
    }
  };
  export default adminReducer;
  