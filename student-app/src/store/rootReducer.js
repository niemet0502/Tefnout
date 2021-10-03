import { combineReducers } from 'redux';
import categoriesReducer from './categories/categories.reducer';
import coursesReducer from './courses/courses.reducer';
import usersReducer from './users/users.reducer';
const rootReducer = combineReducers({
  categories: categoriesReducer,
  users: usersReducer,
  courses: coursesReducer
})

export default rootReducer