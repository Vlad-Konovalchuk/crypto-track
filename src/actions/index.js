import { FETCH_COIN_DATA, FETCH_COIN_DATA_SUCCESS } from "./actionTypes";
export function FetchCoinData() {
  return {
    type: FETCH_COIN_DATA
  };
}
export function FetchCoinDataSuccess(data) {
  return {
    type: FETCH_COIN_DATA_SUCCESS,
    payload: data
  };
}
export function FetchCoinDataFailed() {
  return {
    type: FETCH_COIN_DATA_FAILED
  };
}
