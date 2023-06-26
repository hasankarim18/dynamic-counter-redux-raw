import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducer/counter/counterReducer";
import dynamicCounterReducer from "./reducer/dynamicCounter/dCounterReducer";
import { rawCounterReducer } from "./reducer/RawCounter/rawCounterReducer";




const reducer = combineReducers({
    counter: counterReducer, 
    dynamciCounter: dynamicCounterReducer, 
    rawCounter: rawCounterReducer
})


const store = createStore(reducer)


export default store

