import * as actions from "./courses.actions"

const initialState = {
  loading: false, 
  courses: [],
  hasErrors: false
}

function coursesReducer(state = initialState, action){
  switch (action.type) {
    case actions.GET_COURSES_LOADING:
      return {...state, loading: true}
    case actions.GET_COURSES_SUCCESS: 
    return {loading: false, courses: action.payload, hasErrors: false}
    case actions.GET_COURSES_FAILURES: 
      return {...state, hasErrors: true}
    default:
      return state;
  }
}

export default coursesReducer;