import * as actions from "./categories.actions"

const initialState = {
  loading: false,
  categories: [],
  hasErros: false
}

function categoriesReducer(state = initialState, action){
  switch (action.type) {
    case actions.GET_CATEGORIES_LOADING:
      return {...state, loading: true}
    case actions.GET_CATEGORIES_SUCCESS: 
      return {loading: false, categories: action.payload, hasErros: false}
    case actions.GET_CATEGORIES_FAILURES: 
      return { ...state, loading: false, hasErrors: true }
    case actions.DELETE_CATEGORY:
      return {...state, categories: state.categories.filter(category => action.payload !== category.id)}
    default:
      return state
  }
}

export default categoriesReducer