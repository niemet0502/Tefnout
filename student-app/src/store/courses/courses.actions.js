export const GET_COURSES_LOADING = 'GET COURSES LOADING'
export const GET_COURSES_SUCCESS = 'GET COURSES SUCCESS'
export const GET_COURSES_FAILURES = 'GET COURSES FAILURES'

export const getCourses = () => ({type:GET_COURSES_LOADING })
export const getCoursesSuccess = (courses) => ({type:GET_COURSES_SUCCESS ,payload:courses})
export const getCoursesFailures = () => ({type:GET_COURSES_FAILURES })

export function fetchLastCourses(){
  return async dispatch =>{
    dispatch(getCourses())

    try {
      const response = await fetch("http://127.0.0.1:8000/api/courses")
      const data = await response.json()

      dispatch(getCoursesSuccess(data.courses))
    } catch (error) {
      dispatch(getCoursesFailures())
    }
  }
}