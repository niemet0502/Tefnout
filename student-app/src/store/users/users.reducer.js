import * as actions from "./users.actions"
const initialState = {
  loading: false, 
  users: [],
  hasErrors: false
}

function usersReducer(state = initialState, action){
  switch (action.type) {
    case actions.GET_USERS_LOADING:
      return {...state, loading: true}
    case actions.GET_USERS_SUCCESS: 
      return {loading: false, users: action.payload, hasErrors: false}
    case actions.GET_USERS_FAILURES: 
      return {...state, hasErrors: true}
    default:
      return state;
  }
}

export default usersReducer