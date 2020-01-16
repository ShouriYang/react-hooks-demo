import React, { useState } from 'react';
export default () => {
  const [count, setCount] = useState(0);
  return <div>
    {count}
    <button onClick={() => setCount(count + 1)}>+1</button>
  </div>
}