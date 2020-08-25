import { combineReducers } from "redux";
import capturedTaskReducer from "./capturedTasks";
import authenticationReducer from "./login";
import registerReducer from "./register";

export default combineReducers({
  capturedTasks: capturedTaskReducer,
  authentication: authenticationReducer,
  register: registerReducer,
});