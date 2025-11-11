import React, { useReducer } from "react";

function Counter1() {
  // Step 1: Define reducer function
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  }

  // Step 2: Initialize reducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // Step 3: Use dispatch to update state
  return (
    <div className="flex flex-col items-center gap-3 p-4">
      <h1 className="text-xl font-bold">Count: {state.count}</h1>
      <div className="flex gap-2">
        <button
          className="bg-green-500 text-white px-3 py-1 rounded"
          onClick={() => dispatch({ type: "increment" })}
        >
          ➕ Increment
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded"
          onClick={() => dispatch({ type: "decrement" })}
        >
          ➖ Decrement
        </button>
        <button
          className="bg-gray-500 text-white px-3 py-1 rounded"
          onClick={() => dispatch({ type: "reset" })}
        >
          🔁 Reset
        </button>
      </div>
    </div>
  );
}

export default Counter1;