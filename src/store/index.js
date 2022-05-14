import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"

import rootReducer from "./reducers"
import rootSaga from "./sagas"
import logger from 'redux-logger'
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
import thunk from 'redux-thunk';

const middlewares = [sagaMiddleware, logger , thunk]

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
)
sagaMiddleware.run(rootSaga)

export default store
