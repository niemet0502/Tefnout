import { combineReducers } from 'redux'
import authenticationReducer from "./authentication/authentication.reducer";
import categoriesReducer from './categories/categories.reducer';
import usersReducer from './users/users.reducer';
const rootReducer = combineReducers({
  authentication: authenticationReducer,
  categories: categoriesReducer,
  users: usersReducer
})
export default rootReducer