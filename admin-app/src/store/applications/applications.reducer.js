import * as actions from "./applications.actions"

const initialState = {
  loading: false, 
  applicatitons: [],
  hasErrors: false
}

function applicatitonsReducer(state = initialState, action){
  switch (action.type) {
    case actions.GET_APPLICATIONS_FAILURE:
      return {...state, hasErrors: true}
    case actions.GET_APPLICATIONS_LOADING:
      return {...state, loading: true}
    case actions.GET_APPLICATIONS_SUCCESS: 
      return {loading: false, applicatons: action.payload, hasErrors: false}
    default:
      return state;
  }
}

export default applicatitonsReducer