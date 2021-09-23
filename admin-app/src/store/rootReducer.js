import { combineReducers } from 'redux'
import authenticationReducer from "./authentication/authentication.reducer";
import categoriesReducer from './categories/categories.reducer';
import usersReducer from './users/users.reducer';
import dashboardReducer from "./dashboard/dashboard.reducer";
import coursesReducer from './courses/courses.reducer';
const rootReducer = combineReducers({
  authentication: authenticationReducer,
  categories: categoriesReducer,
  dashboard: dashboardReducer,
  users: usersReducer,
  courses: coursesReducer
})
export default rootReducer