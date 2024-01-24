// index.js
import { combineReducers } from "redux";
import babyReducer from "./babyReducer";

export default combineReducers({
  baby: babyReducer,
});
