import { parseNewCourseContent } from "../../utils/helpers"
import { toast } from "react-toastify";
export const CREATE_NEW_COURSE = 'CREATE_NEW_COURSE'
export const GET_CURRENT_COURSE_CONTENT = 'GET CURRENT COURSE'

export const createNewCourse = course => ({type: CREATE_NEW_COURSE, payload: course})
export const getCurrentCourse = course_content => ({type: GET_CURRENT_COURSE_CONTENT, payload: course_content})

export function storeCourse(course,description,teacher_id){
  return async dispatch => {
    
    try {
      const response = await fetch("http://127.0.0.1:8000/api/courses", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          title:course.title, 
          description: description,
          hours:course.hours, 
          level:course.level, 
          category_id:course.category_id,
          topics:course.topics,
          teacher_id: teacher_id
        })
      })

      const data = await response.json()

      dispatch(createNewCourse(data.course))
      // dispatch(fetchCourseContent(data.course.id))
    } catch (error) {
      
    }
  }
}

export function fetchCourseContent(id){
  return async dispatch => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/course/${id}/new/curriculum`)
      const data = await response.json()
     console.log(parseNewCourseContent(data.sections,data.chapters));
      dispatch(getCurrentCourse(parseNewCourseContent(data.sections,data.chapters)))
    } catch (error) {
      
    }
  }
}

export function storeSection(title,course){
  return async dispatch => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/section",{
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          title: title,
          description: 'la description',
          course_id: course
        })
      })

      const data = await response.json()

      toast(`${data.message}`,{
        position: toast.POSITION.BOTTOM_LEFT,
        theme: "colored",
        type: toast.TYPE.SUCCESS,
      })
      dispatch(fetchCourseContent(course))
    } catch (error) {
      
    }
  }
}

export function updateSection(title,course){
  return async dispatch => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/section",{
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          title: title,
        })
      })

      const data = await response.json()

      toast(`${data.message}`,{
        position: toast.POSITION.BOTTOM_LEFT,
        theme: "colored",
        type: toast.TYPE.SUCCESS,
      })
      dispatch(fetchCourseContent(course))
    } catch (error) {
      
    }
  }
}