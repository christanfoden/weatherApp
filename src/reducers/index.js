import { combineReducers } from 'redux';
import ReducerWeather from './ReducerWeather';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  weather: ReducerWeather
});

export default rootReducer;
