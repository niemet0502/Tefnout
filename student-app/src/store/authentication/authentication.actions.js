import { storeAuthToken, getStoredAuthToken, storeUser, removeStoredAuthToken, removeUser } from "../../utils/currentUser" 
import { history } from "../../utils/history"
import axios from "axios"
export const USERS_LOGIN_LOADING = 'USERS LOGIN LOADING'
export const USERS_LOGIN_REQUEST = 'LOGIN REQUEST'
export const USERS_LOGOUT_REQUEST = 'USERS LOGOUT REQUEST'
export const USERS_LOGIN_FAILURES = 'USERS LOGIN FAILURES'
export const UPDATE_CURRENT_USER = 'UPDATE CURRENT USER'
export const USER_SIGNUP_SUCCESS = 'USER SIGNUP SUCCESS'
export const USER_SIGNUP_FAILURES = 'USER SIGNUP FAILURES'

export const loginUser = () => ({type: USERS_LOGIN_LOADING})
export const loginUserSuccess = user =>  ({type: USERS_LOGIN_REQUEST, payload: user})
export const logoutUser = () => ({type: USERS_LOGOUT_REQUEST})
export const loginUserfailure = (errors) => ({type: USERS_LOGIN_FAILURES, payload: errors})
export const fetchSettingsSuccess = user => ({type: UPDATE_CURRENT_USER, payload: user})
export const signupUserSuccess = () => ({type: USER_SIGNUP_SUCCESS})
export const SignUpUserfailure = (errors) => ({type: USER_SIGNUP_FAILURES, payload: errors})

export function login(user){
  return async dispatch =>{
      dispatch(loginUser())

      try {

          const response = await fetch("http://127.0.0.1:8000/api/login", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              email: user.email,
              password: user.password,
              profil_id: 4
            })
          })

          const data = await response.json()
          console.log(data);
          if (response.status === 422){
            if (data.errors){
              dispatch(loginUserfailure(data.errors))
            }else{
              dispatch(loginUserfailure(data))
            }

          }else{
            // save user's informations in localStorage 
            storeAuthToken(data.token);
            storeUser(JSON.stringify(data.user))
            
            dispatch(loginUserSuccess(data))
            history.push('/dashboard');
          }
      } catch (error) {

      }
  }
}

export function logout(){
  return async dispatch =>{
      try {
        const response = await axios.post(`http://127.0.0.1:8000/api/logout`,{
          headers: {
            Authorization: getStoredAuthToken() ? `Bearer ${getStoredAuthToken()}` : undefined,
          }
        })
        
        // remove token and profil in localStorage  
        removeStoredAuthToken()
        removeUser()
        
        dispatch(logoutUser())
        history.push('/')
      } catch (error) {
        console.log(error); 
      }
  }
}

export function Signup(user){
  return async dispatch => {
    dispatch(loginUser())

    try {
      const response = await fetch("http://127.0.0.1:8000/api/register",{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: user.username,
            email: user.email, 
            profil_id: user.profil_id,
            password: user.password,
            password_confirmation: user.password})
        })

        const data = await response.json()

        if (response.status === 422 ){
          dispatch(SignUpUserfailure(data.errors))
        }else{
          dispatch(signupUserSuccess())      
       }

    } catch (error) {
      dispatch(loginUserfailure())
    }
  }
}