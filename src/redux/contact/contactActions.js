import {
  SET_CONTACT,
  SET_CONTACT_DELETE_REQUEST_LOADING,
  SET_CONTACT_DELETE_REQUEST_SUCCESS,
  SET_CONTACT_DELETE_REQUEST_ERROR,
  
  SET_CONTACT_POST_REQUEST_LOADING,
  SET_CONTACT_POST_REQUEST_SUCCESS,
  SET_CONTACT_POST_REQUEST_ERROR
} from "./contactActionTypes";

export const setContact = (user) => ({
  type: SET_CONTACT,
  payload: user,
});

export const setContactDeleteRequestLoading = () => ({
  type: SET_CONTACT_DELETE_REQUEST_LOADING,
});

export const setContactDeleteRequestSuccess = (data) => ({
  type: SET_CONTACT_DELETE_REQUEST_SUCCESS,
  payload: data,
});

export const setContactDeleteRequestError = (error) => ({
  type: SET_CONTACT_DELETE_REQUEST_ERROR,
  payload: error,
});

export const setContactPostRequestLoading = () => ({
  type: SET_CONTACT_POST_REQUEST_LOADING,
});

export const setContactPostRequestSuccess = (data) => ({
  type: SET_CONTACT_POST_REQUEST_SUCCESS,
  payload: data,
});

export const setContactPostRequestError = (error) => ({
  type: SET_CONTACT_POST_REQUEST_ERROR,
  payload: error,
});

