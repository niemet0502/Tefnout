import * as actions from "./user.actions"

const initialState = {
  loading: false, 
  user: {},
  hasErrors: false
}

function userReducer(state = initialState, action){
  switch (action.type) {
    case actions.GET_USER_LOADING:
      return {...state, loading: true}
    case actions.GET_USER_SUCCESS: 
    return {loading: false, user: action.payload, hasErrors: false}
    case actions.GET_USER_FAILURES: 
      return {...state, hasErrors: true}
    default:
      return state;
  }
}

export default userReducer;