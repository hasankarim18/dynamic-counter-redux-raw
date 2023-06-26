import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dDecrease, dIncrease } from "../redux/reducer/dynamicCounter/dCounterActions";


export default function DynamicCounter() {
  const { dynamciCounter } = useSelector((state) => state);
  const incRef = useRef()
  const decRef = useRef()
  const {value} = dynamciCounter;
  const dispatch = useDispatch();

  const incrementHandler = () => {
    const value = parseInt(incRef.current.value);
     dispatch(dIncrease(value))
    
  };

  const decrementhandler = () => {
    const value = parseInt(decRef.current.value);
    dispatch(dDecrease(value))
  };

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold"> {value}</div>
      <div className="flex space-x-3">
        <div>
          <input ref={incRef} defaultValue={5} type="number" className="input border w-full p-2 mb-2" />
          <button
            className="bg-indigo-400 text-white px-3 py-2 rounded w-full shadow"
            onClick={incrementHandler}
          >
            Increment
          </button>
        </div>
        <div>
          <input ref={decRef} defaultValue={5} type="number" className="input border p-2 w-full mb-2" />
          <button
            className="bg-red-400 text-white px-3 py-2 w-full rounded shadow"
            onClick={decrementhandler}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
