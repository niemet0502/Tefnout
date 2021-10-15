export const GET_CURRICULUM_LOADING = 'GET CURRICULUM LOADING'
export const GET_CURRICULUM_SUCCESS = 'GET CURRICULUM SUCCESS'
export const GET_CURRICULUM_FAILURES = 'GET CURRICULUM FAILURES'

export const getCurriculum = () => ({type:GET_CURRICULUM_LOADING })
export const getCurriculumSuccess = curriculum  => ({type:GET_CURRICULUM_SUCCESS ,payload:curriculum})
export const getCurriculumFailures = () => ({type:GET_CURRICULUM_FAILURES })

export function fetchCourseCurriculum(id){
  return async dispatch => {
    dispatch(getCurriculum())

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/courses/${id}`)
      const data = await response.json()

      dispatch(getCurriculumSuccess(data))
    } catch (error) {
      dispatch(getCurriculumFailures())
    }
  }
}