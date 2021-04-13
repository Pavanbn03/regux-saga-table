import { default as reduxSaga } from "./Reducers/reducer";
import { combineReducers } from "redux";

const rootreducer = combineReducers({
  reduxSaga,
});

export default rootreducer;
