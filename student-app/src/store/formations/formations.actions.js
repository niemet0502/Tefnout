export const GET_TRAININGS_LOADING = 'GET TRAININGS LOADING'
export const GET_TRAININGS_SUCCESS = 'GET TRAININGS SUCCESS'
export const GET_TRAININGS_FAILURES = 'GET TRAININGS FAILURES'
export const GET_CERTIFICATES_SUCCESS = 'GET CERTIFICATES SUCCESS'

export const getTrainings = () => ({type: GET_TRAININGS_LOADING})
export const getTrainingsSuccess = (trainings) => ({type: GET_TRAININGS_SUCCESS, payload: trainings})
export const getTrainingsFailures = () => ({type: GET_TRAININGS_FAILURES})
export const getCertificatesSuccess = () => ({type: GET_CERTIFICATES_SUCCESS})


export function fetchTrainings(id){
  return async dispatch => {
    dispatch(getTrainings())
    
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/student/trainings/${id}`)
      const data = await response.json()
      
      dispatch(getTrainingsSuccess(data))
    } catch (error) {
      dispatch(getTrainingsFailures())
    }
  }
}