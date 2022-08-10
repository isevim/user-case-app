import dateFormatter from "../vanilla/dateFormatter";

// Redux
import store from "../../redux/store"

export default function addNewContactInData(userData, selectedUser, response) {

  const state = store.getState()

  let copyOfUserData = JSON.parse(JSON.stringify(userData))

  let userObject = {
    id: null,
    createdAt: null,
    name: null,
    lastName: null,
    contactId: null,
    phoneNumber: null,
  };

  userObject.id = response.userId;
  userObject.createdAt = dateFormatter("tr", selectedUser.createdAt);
  userObject.name = selectedUser.name;
  userObject.lastName = selectedUser.lastName;
  userObject.contactId = response.id;
  userObject.phoneNumber = response.phoneNumber;


  copyOfUserData.push(userObject);

  copyOfUserData.sort((a, b) => a.id - b.id)
  
  return copyOfUserData;
}
