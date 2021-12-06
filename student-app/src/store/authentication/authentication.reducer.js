import { getStoredAuthToken, getStoredUser } from "../../utils/currentUser"
import * as actions from "./authentication.actions"
import { toast } from "react-toastify"
let token = getStoredAuthToken();
const initialState = token ? { message: '', loading: false, token: token, user: getStoredUser(), hasErrors: {}, Errors: {} } : { message: '', loading: false, token: null, user: {}, hasErrors: {}, Errors: {} };


export default function authenticationReducer(state = initialState, action){
    switch(action.type){
      case actions.USERS_LOGIN_LOADING:
        return {...state, loading: true}
      case actions.USERS_LOGIN_REQUEST:
        return {loading: false, token: action.payload.token, user: action.payload.user, Errors: {}}
      case actions.USERS_LOGIN_FAILURES: 
        return {...state, loading: false, hasErrors: action.payload, Errors: {}}
      case actions.USERS_LOGOUT_REQUEST: 
        return { loading: false, token: null, user: {}, Errors: {} }
      case actions.USER_SIGNUP_FAILURES: 
        return {...state, Errors: action.payload, hasErrors: {}}
      case actions.UPDATE_CURRENT_USER: 
        return {...state, user: action.payload}
      case actions.USER_SIGNUP_SUCCESS: 
      toast("Compte crée avec succès ...",{
        position: toast.POSITION.BOTTOM_LEFT,
        theme: "colored",
        type: toast.TYPE.SUCCESS,
      })
      return {...state, loading: false, hasErrors: {}}
      default: 
        return state
    }
}