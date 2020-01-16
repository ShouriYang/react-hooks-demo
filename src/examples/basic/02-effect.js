import React, { useState, useEffect } from 'react';
export default () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(x => x + 1)
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Math.min(count, 4)])
  //dependencies
  return <div>
    {count}
  </div>

}