import { combineReducers } from 'redux'
import authenticationReducer from "./authentication/authentication.reducer";

export const rootReducer = combineReducers({
  authentication: authenticationReducer
})