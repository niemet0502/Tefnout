import { combineReducers } from 'redux';
import categoriesReducer from './categories/categories.reducer';
import coursesReducer from './courses/courses.reducer';
import usersReducer from './users/users.reducer';
import authenticationReducer from "./authentication/authentication.reducer"
const rootReducer = combineReducers({
  categories: categoriesReducer,
  users: usersReducer,
  courses: coursesReducer,
  authentication: authenticationReducer
})

export default rootReducer