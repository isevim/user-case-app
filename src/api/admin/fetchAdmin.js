// Config Files
import { BASE_URL, API } from "../../services/Config";

// Redux
import store from "../../redux/store";
import {
  setAdminGetRequestError,
  setAdminGetRequestLoading,
  setAdminGetRequestSuccess,
} from "../../redux";

export default function fetchAdmin() {
  return new Promise((resolve, reject) => {
    store.dispatch(setAdminGetRequestLoading);

    fetch(BASE_URL + API.ADMIN.GET_ADMIN)
      .then((response) => {
        response.json().then((data) => {
          store.dispatch(setAdminGetRequestSuccess(data));
        });
        return;
      })
      .catch((error) => {
        store.dispatch(setAdminGetRequestError);
        reject(error);
      });
  });
}
