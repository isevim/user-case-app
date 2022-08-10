// Redux
import store from "../../redux/store"


export default function deletePhoneNumberInUser(selectedUser) {
    const state = store.getState()

    const user = state.user.user

    let result = []


    user?.forEach((element) => {
        element?.contact?.forEach((value) => {
            
            if (!(element.id === selectedUser.id && selectedUser.phoneNumber === value.phoneNumber)) {
                
                result.push(element)
            }
        })
    })

    return result
}