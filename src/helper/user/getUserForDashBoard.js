import dateFormatter from "../vanilla/dateFormatter"

export default function getUserForDashBoard(user, deletedContactId = null) {
  let result = []

  user?.forEach((element) => {
    element?.contact?.forEach((value) => {

      let userObject = {
        id: null,
        createdAt: null,
        name: null,
        lastName: null,
        contactId: null,
        phoneNumber: null,
      };

      userObject.id = element.id
      userObject.createdAt = dateFormatter("tr", element.createdAt)
      userObject.name = element.name
      userObject.lastName = element.lastName
      userObject.contactId = value.id
      userObject.phoneNumber = value.phoneNumber
      result.push(userObject)


    })
  })

  return result
}
