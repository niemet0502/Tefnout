import * as actions from "./applications.actions"

const initialState = {
  loading: false, 
  applications: [],
  hasErrors: false
}

function applicatitonsReducer(state = initialState, action){
  switch (action.type) {
    case actions.GET_APPLICATIONS_FAILURE:
      return {...state, hasErrors: true}
    case actions.GET_APPLICATIONS_LOADING:
      return {...state, loading: true}
    case actions.GET_APPLICATIONS_SUCCESS: 
      return {loading: false, applications: action.payload, hasErrors: false}
    case actions.DELETE_APPLICATION: 
      return {...state, applications: state.applications.filter(app => action.payload !== app.id )}
    default:
      return state;
  }
}

export default applicatitonsReducer