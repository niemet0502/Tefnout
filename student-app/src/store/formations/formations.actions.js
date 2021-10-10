export const GET_TRAININGS_LOADING = 'GET TRAININGS LOADING'
export const GET_TRAININGS_SUCCESS = 'GET TRAININGS SUCCESS'
export const GET_TRAININGS_FAILURES = 'GET TRAININGS FAILURES'

export const getTrainings = () => ({type: GET_TRAININGS_LOADING})
export const getTrainingsSuccess = (trainings) => ({type: GET_TRAININGS_SUCCESS, payload: trainings})
export const getTrainingsFailures = () => ({type: GET_TRAININGS_FAILURES})

export function fetchTrainings(id){
  return async dispatch => {
    dispatch(getTrainings())
    
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/student/trainings/${id}`)
      const data = await response.json()
      
      console.log(data);
      dispatch(getTrainingsSuccess(data))
    } catch (error) {
      dispatch(getTrainingsFailures())
    }
  }
}