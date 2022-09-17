import { useState } from 'react';
import './App.css';

function Counter({initialCount}) {
  // State
  var initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <div className='body'>
      <h1>Count: {count}</h1>
      <br /> 
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </div>
  );
}

export default Counter;