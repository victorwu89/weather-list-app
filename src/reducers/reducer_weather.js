import { FETCH_WEATHER } from '../actions/index.js';

//reducer always takes a state and an action
export default function(state = [], action){
  switch(action.type){
    case FETCH_WEATHER:
    console.log("action data:", action);
     //return state.concat([action.payload.data]); //creates a new array with all the new stuff and old //not mutating
     return [ action.payload.data, ...state ]; // [city, city, city] NOT [city, [city, city] ]
     //new entries are at the top
     //NEVER WANT TO MANIPULATE state - create new array with existing elements
  }

  return state;
}
