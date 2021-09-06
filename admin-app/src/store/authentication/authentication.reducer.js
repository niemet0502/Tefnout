import { getStoredAuthToken } from "../../utils/currentUser"
import * as actions from "./authentication.actions"

let token = getStoredAuthToken();
const initialState = token ? { loading: true, token: token, hasErrors: false } : { loading: false, token: null, hasErrors: false };


export function authenticationReducer(state = initialState, action){
    switch(action.type){
      case actions.USERS_LOGIN_LOADING:
        return {loading: true, ...state}
      case actions.USERS_LOGIN_REQUEST: 
        return {loading: false, token: action.payload, hasErrors: false}
      case actions.USERS_LOGIN_FAILURES: 
        return {...state, loading: false, hasErrors: true}
      default: 
        return state
    }
}