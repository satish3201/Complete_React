    import React, { useState } from 'react';
import PreviousValue from './useRef';
import { useNavigate } from 'react-router-dom';

function Counter({title}) {
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  const increment= () => {
    setCount(count + 1);
  }
  
  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <PreviousValue title1={title} />
      <p>Count: 0</p>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>

      <br></br>


      <button onClick={() => navigate('/use-ref')}>UseRef</button>
    </div>
  );
}

export default Counter; 