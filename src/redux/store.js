import { applyMiddleware, createStore } from "redux";

import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducers";
import rootSaga from "./sagas/table";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
