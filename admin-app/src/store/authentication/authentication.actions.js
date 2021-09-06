import { storeAuthToken, storeUserProfil, removeStoredAuthToken, removeUserProfil } from "../../utils/currentUser" 

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
        const response = await axios.post(`http://127.0.0.1:8000/api/login`, { user })
        const data = response.json()

        // save token and profil in localStorage 
        storeAuthToken(data.token)
        storeUserProfil(data.user.profil_id)

        dispatch(loginUserSuccess(data))
      } catch (error) {
        dispatch(loginUserfailure())
      }
  }
}

export function logout(){
  return async dispatch =>{

      try {
        const response = await axios.post(`http://127.0.0.1:8000/api/logout`)
        
        // remove token and profil in localStorage  
        removeStoredAuthToken()
        removeUserProfil()

        dispatch(logoutUser())
      } catch (error) {
        console.log(error);
      }
  }
}