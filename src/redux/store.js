import {  createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer/rootReducer/rootReducer";

// create our first middleware 

const myLogger = (store)=> (next)=> (action)=> {
      console.log(`Action: ${JSON.stringify(action)}`)
      console.log(`Before State: ${JSON.stringify(store.getState())}`)

      // upcomming state 
      const upcommingState = [action].reduce(rootReducer, store.getState())
        console.log('upcomming state', JSON.stringify(upcommingState))
      // pass acton 
      return next(action)
}


const store = createStore(rootReducer, applyMiddleware(myLogger));


export default store


/** example of curried funcition */

const curried = function (a) {
    return function (b) {
        return function (c) {
            return a * b * c 
        }
    }
}

/// how to call curried function 

const multiply  = curried(1)(2)(3)

console.log(multiply)

