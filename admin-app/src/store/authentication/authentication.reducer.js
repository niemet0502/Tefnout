import { getStoredAuthToken, getStoredUser } from "../../utils/currentUser"
import * as actions from "./authentication.actions"

let token = getStoredAuthToken();
const initialState = token ? { loading: false, token: token, user: getStoredUser(), hasErrors: false } : { loading: false, token: null, user: {}, hasErrors: false };


export default function authenticationReducer(state = initialState, action){
    switch(action.type){
      case actions.USERS_LOGIN_LOADING:
        return {...state, loading: true}
      case actions.USERS_LOGIN_REQUEST:
        return {loading: false, token: action.payload.token, user: action.payload.user, hasErrors: false}
      case actions.USERS_LOGIN_FAILURES: 
        return {...state, loading: false, hasErrors: true}
      case actions.USERS_LOGOUT_REQUEST: 
        return { loading: false, token: null, user: null, hasErrors: false }
      default: 
        return state
    }
}