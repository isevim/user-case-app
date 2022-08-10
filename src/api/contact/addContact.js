// Config Files
import { BASE_URL, API } from "../../services/Config";

// Redux
import store from "../../redux/store";
import {
  setContactPostRequestError,
  setContactPostRequestLoading,
  setContactPostRequestSuccess,
  
} from "../../redux";
import getFetchOptions from "../../helper/fetch/getFetchOptions";
import fetchUser from "../user/fetchUser";

export default function addContact(selectedUser, phoneNumber) {
  console.log("🚀 ~ file: addContact.js ~ line 17 ~ addContact ~ selectedUser", selectedUser)
  return new Promise((resolve, reject) => {
    store.dispatch(setContactPostRequestLoading);

    let formattedUrl = BASE_URL + API.CONTACT.POST_USER_CONTACT + selectedUser.id + "/userContact/" ;

    let body = {
      phoneNumber: phoneNumber,
    };

    const fetchOptions = getFetchOptions('POST', body);


    fetch(formattedUrl, fetchOptions)
      .then((response) => {
        response.json().then((data) => {
          store.dispatch(setContactPostRequestSuccess(data));

          fetchUser()
        });
        return;
      })
      .catch((error) => {
        store.dispatch(setContactPostRequestError);
        reject(error);
      });
  });
}
