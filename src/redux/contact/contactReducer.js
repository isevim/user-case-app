import {
  SET_CONTACT,
  SET_CONTACT_DELETE_REQUEST_LOADING,
  SET_CONTACT_DELETE_REQUEST_SUCCESS,
  SET_CONTACT_DELETE_REQUEST_ERROR,

  SET_CONTACT_POST_REQUEST_LOADING,
  SET_CONTACT_POST_REQUEST_SUCCESS,
  SET_CONTACT_POST_REQUEST_ERROR,

} from "./contactActionTypes";

const initialState = {
  contact: [],
  contactDeleteRequestLoading: false,
  contactDeleteRequestSuccess: false,
  contactDeleteRequestError: false,
  contactDeleteRequestErrorMessage: "",
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };

    case SET_CONTACT_DELETE_REQUEST_LOADING:
      return {
        ...state,
        contactDeleteRequestLoading: true,
        contactDeleteRequestSuccess: false,
        contactDeleteRequestError: false,
        contactDeleteRequestErrorMessage: "",
      };

    case SET_CONTACT_DELETE_REQUEST_SUCCESS:
      return {
        ...state,
        contactDeleteRequestLoading: false,
        contactDeleteRequestSuccess: true,
        contactDeleteRequestError: false,
        contactDeleteRequestErrorMessage: "",
        contact: action.payload,
      };

    case SET_CONTACT_DELETE_REQUEST_ERROR:
      return {
        ...state,
        contactDeleteRequestLoading: false,
        contactDeleteRequestSuccess: false,
        contactDeleteRequestError: true,
        contactDeleteRequestErrorMessage: action.payload,
      };

      case SET_CONTACT_POST_REQUEST_LOADING:
        return {
          ...state,
          contactPostRequestLoading: true,
          contactPostRequestSuccess: false,
          contactPostRequestError: false,
          contactPostRequestErrorMessage: "",
        };
  
      case SET_CONTACT_POST_REQUEST_SUCCESS:
        return {
          ...state,
          contactPostRequestLoading: false,
          contactPostRequestSuccess: true,
          contactPostRequestError: false,
          contactPostRequestErrorMessage: "",
          contact: action.payload,
        };
  
      case SET_CONTACT_POST_REQUEST_ERROR:
        return {
          ...state,
          contactPostRequestLoading: false,
          contactPostRequestSuccess: false,
          contactPostRequestError: true,
          contactPostRequestErrorMessage: action.payload,
        };

    default:
      return state;
  }
};
export default contactReducer;
