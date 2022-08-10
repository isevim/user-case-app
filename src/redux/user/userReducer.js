import {
  SET_USER,
  SET_USER_GET_REQUEST_LOADING,
  SET_USER_GET_REQUEST_SUCCESS,
  SET_USER_GET_REQUEST_ERROR,
} from "./userActionTypes";

const initialState = {
  user: [],
  userGetRequestLoading: false,
  userGetRequestSuccess: false,
  userGetRequestError: false,
  userGetRequestErrorMessage: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case SET_USER_GET_REQUEST_LOADING:
      return {
        ...state,
        userGetRequestLoading: true,
        userGetRequestSuccess: false,
        userGetRequestError: false,
        userGetRequestErrorMessage: "",
      };

    case SET_USER_GET_REQUEST_SUCCESS:
      return {
        ...state,
        userGetRequestLoading: false,
        userGetRequestSuccess: true,
        userGetRequestError: false,
        userGetRequestErrorMessage: "",
        user: action.payload,
      };

    case SET_USER_GET_REQUEST_ERROR:
      return {
        ...state,
        userGetRequestLoading: false,
        userGetRequestSuccess: false,
        userGetRequestError: true,
        userGetRequestErrorMessage: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
