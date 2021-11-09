import * as actions from "./curriculum.actions"

const initialState = {
  loading: false, 
  curriculum: [],
  hasErrors: false
}

function curriculumReducer(state = initialState, action){
  switch (action.type) {
    case actions.GET_CURRICULUM_LOADING:
      return {...state, loading: true}
    case actions.GET_CURRICULUM_SUCCESS: 
    return {loading: false, curriculum: action.payload, hasErrors: false}
    case actions.GET_CURRICULUM_FAILURES: 
      return {...state, hasErrors: true}
    default:
      return state;
  }
}

export default curriculumReducer;