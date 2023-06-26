
import { useDispatch, useSelector} from "react-redux";
import { counterDecrement, counterIncrement} from "../redux/reducer/counter/counterActions";



export default function Counter() {
 
  const {counter} = useSelector((state)=> state)
  const dispatch = useDispatch()



  const incrementHandler = () => {
     
    // dispatch(increment(5))
    dispatch(counterIncrement(parseInt(1)));
  };

  const decrementhandler = () => {
    dispatch(counterDecrement(1))
  };

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{counter.value}</div>
      <div className="flex space-x-3">      
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={incrementHandler}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={decrementhandler}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
