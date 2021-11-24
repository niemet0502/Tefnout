import * as actions from "./course.actions"
const initialState = {
  currentCourse: {},
  currentCourseContent: []
}
function courseReducer(state = initialState,action){
  switch(action.type){
    case actions.CREATE_NEW_COURSE: 
      return {...state,currentCourse: action.payload}
    case actions.GET_CURRENT_COURSE_CONTENT: 
      return {...state,currentCourseContent: action.payload}
    default: 
      return state
  }
}

export default courseReducer