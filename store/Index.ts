import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "./sagas";

import { photoReducer } from "./PhotoReduser";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    photoReducer,
});
const enhancer = compose(applyMiddleware(sagaMiddleware));
export const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootWatcher);
