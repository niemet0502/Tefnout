export const GET_USERS_LOADING = 'GET USER LOADING'
export const GET_USERS_SUCCESS = 'GET USER SUCCESS'
export const GET_USERS_FAILURES = 'GET USER FAILURES'

export const getUsers = () => ({type:GET_USERS_LOADING })
export const getUsersSuccess = (users) => ({type:GET_USERS_SUCCESS , payload: users})
export const getUsersFailures = () => ({type:GET_USERS_FAILURES })


export function fetchInstructor(){
  return async dispatch =>{
    dispatch(getUsers())

    try {
      const response = await fetch("http://127.0.0.1:8000/api/users/profil/3")
      const data = await response.json()

      dispatch(getUsersSuccess(data))
    } catch (error) {
      dispatch(getUsersFailures())
    }
  }
}