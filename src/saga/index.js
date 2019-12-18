import { all, fork} from 'redux-saga/effects';
import { watchIncreaseCounter, watchDecreaseCounter } from './cryptoSaga';

export function* rootSaga () {
    yield all([
        fork(watchIncreaseCounter),
        fork(watchDecreaseCounter),
    ]);
};
