import React, { useReducer, createContext } from 'react';
export const ColorContext = createContext({});
export const UPDATE_COLOR = "UPDATE_COLOR"
//userReducer的第一个参数，通过判断action来对state进行相应的变化
const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_COLOR:
      return action.color
    default:
      return state
  }
}
export const ColorStore = props => {
  const [color, dispatch] = useReducer(reducer, 'blue') //reducer方法和初始state
  //引入本组件都会有color和dispatch属性
  return (
    <div>
      <ColorContext.Provider value={{ color, dispatch }}>
        {props.children}
      </ColorContext.Provider>
    </div>
  )
}