import { call, takeEvery, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import types from "../actions/actionTypes";
import { FetchCoinDataSuccess, FetchCoinDataFailed } from "../actions";
import { apiBaseUrl } from "../constants";
function* fetchCoinData() {
  try {
    const url = `${apiBaseUrl}/v1/ticker/?limit=10`;
    const res = yield call(axios.get, url);
    yield put(FetchCoinDataSuccess(res.data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchDecreaseCounter() {
  yield takeLatest(types.FETCH_COIN_DATA, fetchCoinData);
}
