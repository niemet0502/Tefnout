export const GET_STAT_LOADING = 'GET STAT LOADIN'
export const GET_STAT_SUCCESS = 'GET STAT SUCCESS'
export const GET_STAT_FAILURE = 'GET STAT FAILURE'

export const getStat = () => ({type: GET_STAT_LOADING})
export const getStatSuccess = (data) => ({type: GET_STAT_SUCCESS, payload: data})
export const getStatFailures = () => ({type: GET_STAT_LOADING})

export function getInstructorStat(id){
  return async dispatch => {
    try {
      dispatch(getStat())

      const response = await fetch(`http://127.0.0.1:8000/api/users/instructor/dashboard/${id}`)
      const data = await response.json()

      dispatch(getStatSuccess(data))
      
    } catch (error) {
      dispatch(getStatFailures())
    }
  }
}

export function getAdminStat(){
  return async dispatch => {
    try {
      dispatch(getStat())

      const response = await fetch(`http://127.0.0.1:8000/api/users/admin/dashboard`)
      const data = await response.json()

      dispatch(getStatSuccess(data))
      
    } catch (error) {
      dispatch(getStatFailures())
    }
  }
}