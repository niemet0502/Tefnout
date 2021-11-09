export const GET_COURSE_LOADING = 'GET COURSE LOADING'
export const GET_COURSE_SUCCESS = 'GET COURSE SUCCESS'
export const GET_COURSE_FAILURES = 'GET COURSE FAILURES'

export const getCourse = () => ({type:GET_COURSE_LOADING })
export const getCourseSuccess = (course) => ({type:GET_COURSE_SUCCESS ,payload:course})
export const getCourseFailures = () => ({type:GET_COURSE_FAILURES })

export function fetchCourse(id){
  return async dispatch => {
    dispatch(getCourse())
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/courses/${id}`)
      const data = await response.json()

      dispatch(getCourseSuccess(data.course))
    } catch (error) {
      dispatch(getCourseFailures())
    }
  }
}