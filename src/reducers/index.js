import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

//returns a piece of application state
//values of our state!
const rootReducer = combineReducers({
  weather: WeatherReducer //is equal to a function
  //state: (state = {}) => state
});

export default rootReducer;
