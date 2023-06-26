/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { connect } from "react-redux";
import { rawDecrease, rawIncrease } from "../redux/reducer/RawCounter/rawCounterActions";


const RawCounter =(props) => {

  // console.log(props);

    const { rawCounter, increase , decrease, inc} = props;
 

  const incrementHandler = () => {
    console.log(typeof inc)
   increase(parseInt(inc))
  };

  const decrementhandler = () => {
    decrease()
  };

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{rawCounter.value}</div>
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

const mapStateToProps = (state, ownProps)=> {
   // console.log(ownProps);
    return {
        ...state, 
        ownProps
    }
}
const mapDispatchToProps = (dispatch)=> {
    return {
        increase: (value)=> {dispatch(rawIncrease(value))}, 
        decrease: ()=> {dispatch(rawDecrease())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RawCounter)
