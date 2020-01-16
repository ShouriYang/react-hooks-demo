import React, { useContext } from 'react';
import { ColorContext } from './colorStore'
export default function ShowArea() {
  //通过useContext方法，获取store里面的color属性
  const { color } = useContext(ColorContext)
  return (
    <div style={{ color: color }}>
      字体颜色为bule
    </div>
  )
}