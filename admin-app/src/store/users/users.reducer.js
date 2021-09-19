import * as actions from "./users.actions"
import { toast } from "react-toastify"
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
    case actions.DELETE_USER: 
      toast("User deleted...",{
        position: toast.POSITION.BOTTOM_LEFT,
        theme: "colored",
        type: toast.TYPE.SUCCESS,
      })
      return {...state, users: state.users.filter(user => user.id !== action.payload)}
    case actions.ADD_USER: 
      toast("User added...",{
        position: toast.POSITION.BOTTOM_LEFT,
        theme: "colored",
        type: toast.TYPE.SUCCESS,
      })
      return {...state, users: [...state.users, action.payload]}
    default:
      return state
  }
}

export default usersReducer
