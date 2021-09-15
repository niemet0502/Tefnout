export const GET_USERS_LOADING = 'GET USERS LOADING'
export const GET_USERS_SUCCESS = 'GET USERS SUCCESS'
export const GET_USERS_FAILURES = 'GET USERS FAILURES'

export const getUsers = () => ({type: GET_USERS_LOADING})
export const getUsersSuccess = (users) => ({type: GET_USERS_SUCCESS, payload: users})
export const getUsersFailures = () => ({type: GET_USERS_FAILURES})

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