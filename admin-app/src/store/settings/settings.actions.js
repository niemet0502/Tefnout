import { fetchSettingsSuccess } from "../authentication/authentication.actions"
import axios from "axios"
import { removeUser, storeUser } from "../../utils/currentUser"
export const UPDATE_SETTINGS_LOAGING  = 'UPDATE SETTINGS LOAGING'
export const UPDATE_SETTINGS_SUCCESS = 'UPDATE SETTINGS SUCCESS'
export const UPDATE_SETTINGS_FAILURES = 'UPDATE SETTINGS FAILURES'

export const updateSettings = () => ({type: UPDATE_SETTINGS_LOAGING})
export const updateSettingsSuccess = user => ({type: UPDATE_SETTINGS_SUCCESS, payload: user})
export const updateSettingsFailures = () => ({type: UPDATE_SETTINGS_LOAGING})

export function updateUser(user){
  return async dispatch => {

    console.log('in');

    try {

      const headers = { 
        // 'Authorization': 'Bearer ',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      };
      const response = await axios.put(`http://127.0.0.1:8000/api/users/${user.id}`, user, { headers })
      
      removeUser()
      storeUser(response.data.status[0])
      dispatch(fetchSettingsSuccess(response.data.status[0]))
    } catch (error) {
      console.log(error);
    }

  }
}


