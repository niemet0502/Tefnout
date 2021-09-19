import * as actions from "./dashboard.actions"

const initialState = {
  loading: false,
  data: {},
  hasErros: false
}

function dashboardReducer(state = initialState, action){
  switch (action.type) {
    case actions.GET_STAT_LOADING:
      return {...state, loading: true}
    case actions.GET_STAT_FAILURE: 
      return {...state, loading: false, hasErros: true}
    case actions.GET_STAT_SUCCESS: 
      return {loading: false, data: action.payload, hasErros: false}
    default:
      return state
  }
}

export default dashboardReducer