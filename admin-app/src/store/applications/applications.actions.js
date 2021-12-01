export const GET_APPLICATIONS_LOADING = 'GET APPLICATONS LOADING'
export const GET_APPLICATIONS_SUCCESS = 'GET APPLICATONS SUCCESS'
export const GET_APPLICATIONS_FAILURE = 'GET APPLICATONS FAILURE'

export const getApplications = () => ({type: GET_APPLICATIONS_LOADING  })
export const getApplicationsSuccess = (applications) => ({type: GET_APPLICATIONS_SUCCESS , payload: applications})
export const getApplicationsFailures = () => ({type: GET_APPLICATIONS_FAILURE })


export function fetchApplications(){
  return async dispatch => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/applications")
      const data = await response.json()

      dispatch(getApplicationsSuccess(data))
    } catch (error) {
      
    }
  }
}
