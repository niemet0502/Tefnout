export const USERS_LOGIN_LOADING = 'USERS LOGIN LOADING'
export const USERS_LOGIN_REQUEST = 'LOGIN REQUEST'
export const USERS_LOGOUT_REQUEST = 'USERS LOGOUT REQUEST'
export const USERS_LOGIN_FAILURES = 'USERS LOGIN FAILURES'

export const loginUser = () => ({type: USERS_LOGIN_LOADING})
export const loginUserSuccess = user =>  ({type: USERS_LOGIN_REQUEST, payload: user.token})
export const logoutUser = () => ({type: USERS_LOGOUT_REQUEST})
export const loginUserfailure = () => ({type: USERS_LOGIN_FAILURES})