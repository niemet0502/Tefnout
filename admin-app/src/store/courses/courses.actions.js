export const GET_COURSES_LOADING = 'GET COURSES LOADGIN'
export const GET_COURSES_SUCCESS = 'GET COURSES SUCCESS'
export const GET_COURSES_FAILURES = 'GET COURSES FAILURES'
export const DELETE_COURSE = 'DELETE COURSE'

export const getCourses = () => ({type: GET_COURSES_LOADING})
export const getCoursesSuccess = courses => ({type: GET_COURSES_SUCCESS, payload: courses})
export const getCoursesFailure = () => ({type: GET_COURSES_FAILURES})
export const delCourse = id => ({type: DELETE_COURSE, payload: id})

export function fetchCourses(){
  return async dispatch => {
    dispatch(getCourses())

    try {
      const response = await fetch("http://127.0.0.1:8000/api/admin/courses")
      const data = await response.json()

      dispatch(getCoursesSuccess(data.courses))
    } catch (error) {
      dispatch(getCoursesFailure())
    }
  }
}

export function fetchTeacherCourses(id){
  return async dispatch => {
    dispatch(getCourses())

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/teacher/${id}/courses`)
      const data = await response.json()

      dispatch(getCoursesSuccess(data.courses))
    } catch (error) {
      dispatch(getCoursesFailure())
    }
  }
}

export function removeCourse(id){
  return async dispatch => {
    try {
      await fetch(`http://127.0.0.1:8000/api/courses/${id}`)

      dispatch(delCourse(id))
    } catch (error) {
      console.log(error);
    }
  }
}