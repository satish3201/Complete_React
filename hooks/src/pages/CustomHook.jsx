import React from 'react';
import useToggle from '../hooks/useToggle';

function MyComponent() {
  const [isOn, toggle] = useToggle(false)

  return (
    <div>
      <p>Status: {isOn ? 'On' : 'Off'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}


export default MyComponent