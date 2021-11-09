export const GET_USER_LOADING = 'GET USER LOADING'
export const GET_USER_SUCCESS = 'GET USER SUCCESS'
export const GET_USER_FAILURES = 'GET USER FAILURES'

export const getUser = () => ({type:GET_USER_LOADING })
export const getUserSuccess = (user) => ({type:GET_USER_SUCCESS ,payload:user})
export const getUserFailures = () => ({type:GET_USER_FAILURES })

export function fetchUser(id){
  return async dispatch => {
    dispatch(getUser())
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/users/${id}`)
      const data = await response.json()
      
      dispatch(getUserSuccess(data.user))
    } catch (error) {
      dispatch(getUserFailures())
    }
  }
}