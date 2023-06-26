
import { useState } from 'react';
import './App.css'
import Counter from './Components/Counter'
import DynamicCounter from './Components/DynamicCounter';
import RawCounter from './Components/RawCounter';
import VariableCounter from './Components/VariableCounter';


function App() {
  const [isDaynamic, setIsDaynamic] = useState(false)



  return (
    <>
      <div className="container mx-auto">
        <div className="m-4">
          
        </div>
        <h2 className="text-3xl">Redux Counter </h2>
        <div className="mt-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="border p-2">
              <h2 className="text-xl">Normal Counter</h2>
              <Counter />
            </div>
            <div className="border p-2">
              <h2 className="text-xl">Dynamic Counter</h2>
              <DynamicCounter />
            </div>
          </div>
          <div className="mt-8 border">
            <h2 className="text-xl text-center p-2">Raw Counter</h2>
            <RawCounter inc={11} />
          </div>
          {/* variable counter */}
          <div className="mt-8 border">
            <h2 className="text-xl text-center p-2">Variable Counter</h2>
            <div className="m-4 flex justify-center ">
              <button
                onClick={() => {
                  setIsDaynamic(false);
                }}
                className={` text-xl text-white font-semibold btn px-8 py-4 rounded-l-xl ${
                  !isDaynamic ? "bg-green-400" : "bg-red-400"
                } `}
              >
                Simple Counter
              </button>
              <button
                onClick={() => {
                  setIsDaynamic(true);
                }}
                className={` text-xl text-white font-semibold btn px-8 py-4 rounded-r-xl ${
                  isDaynamic ? "bg-green-400" : "bg-red-400"
                } `}
              >
                Dynamic Counter
              </button>
            </div>
            <VariableCounter dynamic={isDaynamic} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App
