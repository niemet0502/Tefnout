import { getStoredAuthToken } from "../../utils/currentUser"
import * as actions from "./authentication.actions"

let token = getStoredAuthToken();
const initialState = token ? { loading: false, token: token, hasErrors: false } : { loading: false, token: null, hasErrors: false };


export default function authenticationReducer(state = initialState, action){
    switch(action.type){
      case actions.USERS_LOGIN_LOADING:
        return {...state, loading: true}
      case actions.USERS_LOGIN_REQUEST: 
        return {loading: false, token: action.payload, hasErrors: false}
      case actions.USERS_LOGIN_FAILURES: 
        return {...state, loading: false, hasErrors: true}
      case actions.USERS_LOGOUT_REQUEST: 
        return { loading: false, token: null, hasErrors: false }
      default: 
        return state
    }
}