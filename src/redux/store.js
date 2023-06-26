import {  createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer/rootReducer/rootReducer";
import myLogger from "./middlewares/myLogges";
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'



const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, myLogger))
);


export default store


/** example of curried funcition */

// const curried = function (a) {
//     return function (b) {
//         return function (c) {
//             return a * b * c 
//         }
//     }
// }

// /// how to call curried function 

// const multiply  = curried(1)(2)(3)

// console.log(multiply)

