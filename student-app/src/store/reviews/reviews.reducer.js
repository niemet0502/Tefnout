import * as actions from "./reviews.actions"

const initialState = {
  loading: false, 
  reviews: [],
  hasErrors: false
}

function reviewsReducer(state = initialState, action){
  switch (action.type) {
    case actions.GET_REVIEW_LOADING:
      return {...state, loading: true}
    case actions.GET_REVIEW_SUCCESS: 
    return {loading: false, reviews: action.payload, hasErrors: false}
    case actions.GET_REVIEW_FAILURES: 
      return {...state, hasErrors: true}
    case actions.ADD_REVIEW_SUCCESS:
      return {...state, reviews: [...state.reviews, action.payload]}
    default:
      return state;
  }
}

export default reviewsReducer;