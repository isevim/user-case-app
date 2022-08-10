// Config Files
import { BASE_URL, API } from "../../services/Config";

// Redux
import store from "../../redux/store";
import {
  setContactDeleteRequestError,
  setContactDeleteRequestLoading,
  setContactDeleteRequestSuccess,

  setUserGetRequestSuccess
} from "../../redux";
import deletePhoneNumberInUser from "../../helper/user/deletePhoneNumberInUser";

export default function deleteContact(selectedUser) {
  return new Promise((resolve, reject) => {
    store.dispatch(setContactDeleteRequestLoading);

    let formattedUrl = BASE_URL + API.CONTACT.DELETE_USER_CONTACT + selectedUser.id +"/userContact/" +selectedUser.contactId;

    fetch(formattedUrl, {method:"DELETE"})
      .then((response) => {
        response.json().then((data) => {
          store.dispatch(setContactDeleteRequestSuccess(data));

          const formattedData = deletePhoneNumberInUser(selectedUser)
          store.dispatch(setUserGetRequestSuccess(formattedData))
        });
        return;
      })
      .catch((error) => {
        store.dispatch(setContactDeleteRequestError);
        reject(error);
      });
  });
}
