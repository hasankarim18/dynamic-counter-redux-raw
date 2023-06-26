/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { connect } from "react-redux";
import {
  counterDecrement,
  counterIncrement,
} from "../redux/reducer/counter/counterActions";

import {
  dDecrease,
  dIncrease,
} from "../redux/reducer/dynamicCounter/dCounterActions";
import { useRef } from "react";

const VariableCounter = (props) => {
    const incRef = useRef()
    const decRef = useRef()
    
    const {count, increase, decrease, dynamic } = props;
 // console.log("variable counter",props);

  // const { rawCounter, increase, decrease, inc } = props;

  const incrementHandler = () => {
         if (dynamic) {
            increase(parseInt(incRef.current.value))
         } else {
           increase()
         }
  };

  const decrementhandler = () => {
     if (dynamic) {
       decrease(parseInt(decRef.current.value));
     } else {
       decrease();
     }
  };

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex gap-8 space-x-3">
        <div>
          {dynamic ? (
            <input 
             ref = {incRef}
             defaultValue={5} type="number" className="w-full p-2 mb-2 border " />
          ) : null}
          <button
            className="bg-indigo-400 text-white px-3 w-full py-2 rounded shadow"
            onClick={incrementHandler}
          >
            {dynamic ? "Dynamic Increment" : "Static Increment By 2"}
          </button>
        </div>
        <div>
          {dynamic ? (
            <input 
             ref={decRef}
             defaultValue={5} type="number" className="w-full p-2 mb-2 border " />
          ) : null}
          <button
            className="bg-red-400 text-white px-3 w-full py-2 rounded shadow"
            onClick={decrementhandler}
          >
            {dynamic ? "Dynamic Increment" : "Static Decrement By 2"}
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps);
  // console.log(ownProps);
  return {
    count: !ownProps.dynamic ? state.counter.value : state.dynamciCounter.value
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
 //   console.log('dispatch',ownProps)
  return {
    increase: (value) => {
        if(ownProps.dynamic){
              dispatch(dIncrease(value));
        }else {
            dispatch(counterIncrement(2))
        }
  
    },
    decrease: (value) => {
      if (ownProps.dynamic) {
        dispatch(dDecrease(value));
      } else {
        dispatch(counterDecrement(2));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter);
