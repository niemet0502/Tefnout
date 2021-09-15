import * as actions from "./users.actions"

export const initialState = {
  loading: false, 
  users: [],
  hasErros: false
}

function usersReducer(state = initialState, action){
  switch (action.type) {
    case actions.GET_USERS_LOADING:
      return {...state, loading: true}
    case actions.GET_USERS_SUCCESS: 
      return {loading: false, users: action.payload, hasErros: false}
    case actions.GET_USERS_FAILURES: 
      return {...state, loading: false, hasErros: true}
    default:
      return state
  }
}

export default usersReducer
