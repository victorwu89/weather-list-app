import axios from 'axios';

const API_KEY = 'e7f70f33842065f5e314967ba6dd498a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


//always returns an action
//an action always has a type
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); //returns a promise, doesn't ever contain our bindActionCreators
  //returning the process as the payload
  console.log('Request', request);
  //waits until the promise resolves than send the data
  //purpose of redux promise or middleware - translates the promise and specifically the payload property, if the payload is a promise.
  //Redux promise stops the promise or action and then when request finishes it dispaches a new action of the same type but with a payload of thedata
  //redux promise unravels the info for us
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
