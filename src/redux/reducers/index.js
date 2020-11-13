import { combineReducers } from "redux";
import eventReducer from "./event";
//Combine reducers
const indexReducer = combineReducers({
  event: eventReducer,
});

export default indexReducer;
