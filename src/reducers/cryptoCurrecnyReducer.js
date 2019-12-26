import {
  FETCH_COIN_DATA,
  FETCH_COIN_DATA_SUCCESS,
  FETCH_COIN_DATA_FAILED
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  data: [],
  isFailed: false,
  errMessage: null
};

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COIN_DATA:
      return { ...state, isLoading: true };
    case FETCH_COIN_DATA_SUCCESS:
      return { ...state, data: action.payload, isLoading: false };
    case FETCH_COIN_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        isFailed: true,
        errMessage: action.payload
      };
    default:
      return state;
  }
}
