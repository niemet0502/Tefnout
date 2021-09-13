import { combineReducers } from 'redux'
import authenticationReducer from "./authentication/authentication.reducer";

const rootReducer = combineReducers({
  authentication: authenticationReducer
})
export default rootReducer