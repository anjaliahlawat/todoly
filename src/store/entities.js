import { combineReducers } from "redux";
import capturedTaskReducer from "./capturedTasks";

export default combineReducers({
  capturedTasks: capturedTaskReducer
});