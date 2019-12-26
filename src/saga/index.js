import { all, fork } from "redux-saga/effects";
import { watchDecreaseCounter } from "./cryptoSaga";

export function* rootSaga() {
  yield all([fork(watchDecreaseCounter)]);
}
