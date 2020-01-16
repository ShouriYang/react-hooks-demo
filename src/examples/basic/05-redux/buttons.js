import React, { useContext } from 'react';
import { ColorContext, UPDATE_COLOR } from './colorStore'
export default function Buttons() {
  //通过useContext方法获取store里面的dispatch方法，传入action的type和color属性
  const { dispatch } = useContext(ColorContext)
  return (
    <div>
      <button onClick={() => { dispatch({ type: UPDATE_COLOR, color: 'red' }) }}>红色</button>
      <button onClick={() => { dispatch({ type: UPDATE_COLOR, color: 'yellow' }) }}>黄色</button>
    </div>
  )
}