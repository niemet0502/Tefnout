import { combineReducers } from 'redux'
import authenticationReducer from "./authentication/authentication.reducer";
import categoriesReducer from './categories/categories.reducer';
const rootReducer = combineReducers({
  authentication: authenticationReducer,
  categories: categoriesReducer
})
export default rootReducer