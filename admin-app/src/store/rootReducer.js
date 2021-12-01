import { combineReducers } from 'redux'
import authenticationReducer from "./authentication/authentication.reducer";
import categoriesReducer from './categories/categories.reducer';
import usersReducer from './users/users.reducer';
import dashboardReducer from "./dashboard/dashboard.reducer";
import coursesReducer from './courses/courses.reducer';
import reviewsReducer from './reviews/reviews.reducer';
import courseReducer from './course/course.reducer';
import applicatitonsReducer from './applications/applications.reducer';
const rootReducer = combineReducers({
  authentication: authenticationReducer,
  categories: categoriesReducer,
  dashboard: dashboardReducer,
  users: usersReducer,
  courses: coursesReducer,
  reviews: reviewsReducer,
  course: courseReducer,
  applications: applicatitonsReducer
})
export default rootReducer