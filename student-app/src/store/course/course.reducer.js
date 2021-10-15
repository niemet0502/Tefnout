import * as actions from "./course.actions"

const initialState = {
  loading: false, 
  course: {},
  hasErrors: false
}

function courseReducer(state = initialState, action){
  switch (action.type) {
    case actions.GET_COURSE_LOADING:
      return {...state, loading: true}
    case actions.GET_COURSE_SUCCESS: 
    return {loading: false, course: action.payload, hasErrors: false}
    case actions.GET_COURSE_FAILURES: 
      return {...state, hasErrors: true}
    default:
      return state;
  }
}

export default courseReducer;