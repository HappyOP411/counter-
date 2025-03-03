import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  function handleInc() {
    setCount(count + 1);
  }
  console.log("loading...");
  function handleReset(){
    setCount(0);
  }

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={handleInc}>Increment</button>
        <button
          disabled={count === 0}
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrement
        </button>
        <button onClick={handleReset}>Reset</button>
    
      </div>
    </>
  );
};

export default App;
