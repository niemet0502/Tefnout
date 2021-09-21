import * as actions from "./courses.actions"

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
    default:
      return state;
  }
}

export default coursesReducer