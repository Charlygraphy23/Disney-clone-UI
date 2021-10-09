import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSaga from "redux-saga";
import Logger from "redux-logger";
import Reducer from "./reducers/index";
import IndexSaga from "./sagas/index";

const sagaMiddleware = createSaga();

const store = createStore(
	Reducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware, Logger))
);

sagaMiddleware.run(IndexSaga);

export default store;
