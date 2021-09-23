import * as actions from "./courses.actions"
import { toast } from "react-toastify"
export const initialState = {
  loading: false,
  courses: [],
  hasErros: false
}

function coursesReducer(state = initialState, action){
  switch (action.type) {
    case actions.GET_COURSES_LOADING:
      return {...state, loading: true}
    case actions.GET_COURSES_SUCCESS: 
      return {loading: false, courses: action.payload, hasErros: false}
    case actions.GET_COURSES_FAILURES:
      return {...state, hasErros: true}
    case actions.DELETE_COURSE: 
      toast("Course deleted...",{
        position: toast.POSITION.BOTTOM_LEFT,
        theme: "colored",
        type: toast.TYPE.SUCCESS,
      })
        return {...state, courses: state.courses.filter(course => action.payload !== course.id)}
    default:
      return state;
  }
}

export default coursesReducer