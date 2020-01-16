import React from 'react';
import ShowArea from './showArea'
import Buttons from './buttons'
import { ColorStore } from './colorStore'

export default function Redux() {
  //用store组件包裹需要共享状态的组件
  return (
    <div>
      <ColorStore>
        <ShowArea></ShowArea>
        <Buttons></Buttons>
      </ColorStore>
    </div>
  )
}