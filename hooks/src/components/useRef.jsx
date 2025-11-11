import React, { useState, useEffect, useRef } from "react";

function PreviousValue({title1}) {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count; 
  }, [count]);

  return (
    <div>
      <h1>{title1}</h1>
      <p>Current: {count}</p>
      <p>Previous: {prevCount.current}</p>
      <button onClick={() => setCount(c => c + 1)}>Increase</button>
    </div>
  );
}

export default PreviousValue