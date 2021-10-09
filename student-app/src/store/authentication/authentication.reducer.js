import { getStoredAuthToken, getStoredUser } from "../../utils/currentUser"
import * as actions from "./authentication.actions"
import { toast } from "react-toastify"
let token = getStoredAuthToken();
const initialState = token ? { loading: false, token: token, user: getStoredUser(), hasErrors: false } : { loading: false, token: null, user: {}, hasErrors: false };


export default function authenticationReducer(state = initialState, action){
    switch(action.type){
      case actions.USERS_LOGIN_LOADING:
        return {...state, loading: true}
      case actions.USERS_LOGIN_REQUEST:
        toast("Welcome back...",{
          position: toast.POSITION.BOTTOM_LEFT,
          theme: "colored",
          type: toast.TYPE.SUCCESS,
        })
        return {loading: false, token: action.payload.token, user: action.payload.user, hasErrors: false}
      case actions.USERS_LOGIN_FAILURES: 
        return {...state, loading: false, hasErrors: true}
      case actions.USERS_LOGOUT_REQUEST: 
        return { loading: false, token: null, user: {}, hasErrors: false }
      case actions.UPDATE_CURRENT_USER: 
        return {...state, user: action.payload}
        case actions.USER_SIGNUP_SUCCESS: 
        toast("New account created...",{
          position: toast.POSITION.BOTTOM_LEFT,
          theme: "colored",
          type: toast.TYPE.SUCCESS,
        })
        return {...state, loading: false, hasErrors: false}
      default: 
        return state
    }
}