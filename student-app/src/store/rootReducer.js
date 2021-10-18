import { combineReducers } from 'redux';
import categoriesReducer from './categories/categories.reducer';
import coursesReducer from './courses/courses.reducer';
import usersReducer from './users/users.reducer';
import authenticationReducer from "./authentication/authentication.reducer"
import trainingsReducer from "./formations/formations.reducer"
import reviewsReducer from './reviews/reviews.reducer';
import courseReducer from './course/course.reducer';
import userReducer from './user/user.reducer';
import curriculumReducer from './curriculum/curriculum.reducer';
import formationReducer from './formation/formation.reducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  users: usersReducer,
  courses: coursesReducer,
  authentication: authenticationReducer,
  trainings: trainingsReducer,
  course: courseReducer,
  reviews: reviewsReducer,
  user: userReducer,
  curriculum: curriculumReducer,
  training: formationReducer
})

export default rootReducer