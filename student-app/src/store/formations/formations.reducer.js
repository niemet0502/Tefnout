import * as actions from "./formations.actions"

const initialState =  {
  loading: false, 
  trainings: [],
  hasErrors: false
}


function trainingsReducer(state = initialState, action){
  switch (action.type) {
    case actions.GET_TRAININGS_LOADING:
     return {...state, loading: true}
    case actions.GET_TRAININGS_FAILURES:
      return {...state, hasErrors: true}
    case actions.GET_TRAININGS_SUCCESS: 
      return {loading: false, trainings: action.payload, hasErrors: false}
    default:
      return state;
  }
}

export default trainingsReducer