// Config Files
import { BASE_URL, API } from "../../services/Config";

// Redux
import store from "../../redux/store";
import {
  setUserGetRequestError,
  setUserGetRequestLoading,
  setUserGetRequestSuccess,
} from "../../redux";

export default function fetchUser() {
  return new Promise((resolve, reject) => {
    store.dispatch(setUserGetRequestLoading);

    fetch(BASE_URL + API.USER.GET_USER)
      .then((response) => {
        response.json().then((data) => {
          store.dispatch(setUserGetRequestSuccess(data));
        });
        return;
      })
      .catch((error) => {
        store.dispatch(setUserGetRequestError);
        reject(error);
      });
  });
}
