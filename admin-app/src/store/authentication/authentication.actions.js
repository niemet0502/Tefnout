import { storeAuthToken, getStoredAuthToken, storeUserProfil, removeStoredAuthToken, removeUserProfil } from "../../utils/currentUser" 
import { history } from "../../utils/history"
import axios from "axios"
export const USERS_LOGIN_LOADING = 'USERS LOGIN LOADING'
export const USERS_LOGIN_REQUEST = 'LOGIN REQUEST'
export const USERS_LOGOUT_REQUEST = 'USERS LOGOUT REQUEST'
export const USERS_LOGIN_FAILURES = 'USERS LOGIN FAILURES'

export const loginUser = () => ({type: USERS_LOGIN_LOADING})
export const loginUserSuccess = user =>  ({type: USERS_LOGIN_REQUEST, payload: user.token})
export const logoutUser = () => ({type: USERS_LOGOUT_REQUEST})
export const loginUserfailure = () => ({type: USERS_LOGIN_FAILURES})

export function login(user){
  return async dispatch =>{
      dispatch(loginUser())

      try {
          
           axios.post("http://127.0.0.1:8000/api/login", {
            email: user.email,
            password: user.password,
          }).then(result => {

            // save user's information in localStorage 
            console.log(result.data.token);
            storeAuthToken(result.data.token)
            
            dispatch(loginUserSuccess(result.data))
            history.push('/dashboard');
          }).catch(error => {
            console.log(error.response.data.errors);
            dispatch(loginUserfailure())
          })
      } catch (error) {

      }
  }
}

export function logout(){
  return async dispatch =>{
      console.log(getStoredAuthToken());
      try {
        const response = await axios.post(`http://127.0.0.1:8000/api/logout`,{
          headers: {
            Authorization: getStoredAuthToken() ? `Bearer ${getStoredAuthToken()}` : undefined,
          }
        })
        
        // remove token and profil in localStorage  
        removeStoredAuthToken()
        removeUserProfil()
        
        dispatch(logoutUser())
        history.push('/')
      } catch (error) {
        console.log(error); 
      }
  }
}