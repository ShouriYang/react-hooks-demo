import React, { useContext, createContext, useState } from 'react';
const CountContext = createContext();//创建上下文
function Counter() {
  let count = useContext(CountContext);//接收父组件传值
  return (
    <h2>{count}</h2>
  )
}
export default function Context() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => { setCount(count + 1) }}>click me</button>
      <CountContext.Provider value={count}>
        <Counter></Counter>
      </CountContext.Provider>
    </div>
  )
}