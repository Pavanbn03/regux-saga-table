import { default as table } from "./Reducers/table";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  table,
});

export default rootReducer;
