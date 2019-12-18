import {Platform} from 'react-native'
import {createStore, applyMiddleware, compose} from 'redux'
import devTools from 'remote-redux-devtools'
import promise from 'redux-promise'
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers'
import {rootSaga} from '../saga'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(
        sagaMiddleware,
        createLogger(),
    ),
);


sagaMiddleware.run(rootSaga);

export {
    store,
}
