import { applyMiddleware, createStore, compose } from "redux"

import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { createPromise } from 'redux-promise-middleware'

import reducer from "./reducers"

const middleware = applyMiddleware(createPromise(), thunk, createLogger())

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(
        middleware
    )
);

export default store
