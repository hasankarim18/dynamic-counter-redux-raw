// create our first middleware

import rootReducer from "../reducer/rootReducer/rootReducer";

const myLogger = (store) => (next) => (action) => {
  console.log(`Action: ${JSON.stringify(action)}`);
  console.log(`Before State: ${JSON.stringify(store.getState())}`);

  // upcomming state
  const upcommingState = [action].reduce(rootReducer, store.getState());
  console.log("upcomming state", JSON.stringify(upcommingState));
  // pass acton
  return next(action);
};



export default myLogger;