import * as actions from "./reviews.actions";
const initialState =  {
  commentsLoading: false, 
  comments: [],
  commentsHasErrors: false,
  raitingLoading: false, 
  raitings: {},
  raitingHasErros: false
}


function reviewsReducer(state = initialState, action){
  switch (action.type) {
    case actions.GET_COMMENTS_LOADING:
      return {...state, commentsLoading:  true}
    case actions.GET_COMMENTS_SUCCESS: 
      return {...state, commentsLoading: false, comments: action.payload, commentsHasErrors: false}
    case actions.GET_COMMENTS_FAILURES: 
      return {...state, commentsHasErrors: true}
      case actions.GET_RAITING_LOADING:
        return {...state, raitingLoading:  true}
      case actions.GET_RAITING_SUCCESS: 
        return {...state, raitingLoading: false, raitings: action.payload, raitingHasErrors: false}
      case actions.GET_RAITING_FAILURES: 
        return {...state, raitingHasErrors: true}
    default:
      return state
  }
}

export default reviewsReducer