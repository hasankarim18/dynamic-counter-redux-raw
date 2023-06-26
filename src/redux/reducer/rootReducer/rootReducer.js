

import { combineReducers } from "redux";
import { counterReducer } from    "../counter/counterReducer";
import dynamicCounterReducer from "../dynamicCounter/dCounterReducer";
import { rawCounterReducer } from "../RawCounter/rawCounterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  dynamciCounter: dynamicCounterReducer,
  rawCounter: rawCounterReducer,
});

export default rootReducer