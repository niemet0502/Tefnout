import { getStoredAuthToken, getStoredUser } from "../../utils/currentUser"
import * as actions from "./authentication.actions"

let token = getStoredAuthToken();
const initialState = token ? { loading: false, token: token, user: getStoredUser(), hasErrors: {} } : { loading: false, token: null, user: {}, hasErrors: {} };


export default function authenticationReducer(state = initialState, action){
    switch(action.type){
      case actions.USERS_LOGIN_LOADING:
        return {...state, loading: true}
      case actions.USERS_LOGIN_REQUEST:
        return {loading: false, token: action.payload.token, user: action.payload.user, hasErrors: {}}
      case actions.USERS_LOGIN_FAILURES: 
        return {...state, loading: false, hasErrors: action.payload}
      case actions.USERS_LOGOUT_REQUEST: 
        return { loading: false, token: null, user: null, hasErrors: {} }
      case actions.UPDATE_CURRENT_USER: 
        return {...state, user: action.payload}
      default: 
        return state
    }
}