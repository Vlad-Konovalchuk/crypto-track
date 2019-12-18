import {combineReducers} from 'redux';
import cryptoCurrencyReducer from './cryptoCurrecnyReducer'


export default combineReducers({
    crypto: cryptoCurrencyReducer
})
