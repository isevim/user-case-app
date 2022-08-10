import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import contactReducer from "./contact/contactReducer";

const appReducer = combineReducers({
  user: userReducer,
  contact: contactReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "RESET_STORE") {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
