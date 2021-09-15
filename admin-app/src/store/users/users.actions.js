import axios from "axios"
export const GET_USERS_LOADING = 'GET USERS LOADING'
export const GET_USERS_SUCCESS = 'GET USERS SUCCESS'
export const GET_USERS_FAILURES = 'GET USERS FAILURES'
export const DELETE_USER = 'DELETE USER'

export const getUsers = () => ({type: GET_USERS_LOADING})
export const getUsersSuccess = (users) => ({type: GET_USERS_SUCCESS, payload: users})
export const getUsersFailures = () => ({type: GET_USERS_FAILURES})
export const deleteUser = (user) => ({type: DELETE_USER, payload: user.id})

export function fetchUsers(){
  return async dispatch => {
    dispatch(getUsers())

    try {
      const response = await fetch("http://127.0.0.1:8000/api/users")
      const data = await response.json()

      dispatch(getUsersSuccess(data))
    } catch (error) {
      console.log(error);
      dispatch(getUsersFailures())
    }
  }
}

export function removeUser(user){
  return async dispatch => {
    
    try {
      await axios.delete(`http://127.0.0.1:8000/api/users/${user.id}`)

      dispatch(deleteUser(user))
    } catch (error) {
      console.log(error);
    }
  }
}