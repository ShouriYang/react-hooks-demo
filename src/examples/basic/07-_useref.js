import React, { useState, useEffect, useRef } from 'react';
function UseRef() {
  const inputEl = useRef(null)
  const onButtonClick = () => {
    inputEl.current.value = "Hello ,JSPang"
    console.log(inputEl) //输出获取到的DOM节点
  }
  const textRef = useRef()
  useEffect(() => {
    textRef.current = text;
    console.log('textRef.current:', textRef.current)
  })
  const [text, setText] = useState('jspang')
  return (
    <>
      <input ref={inputEl} type="text"></input>
      <button onClick={onButtonClick}>在input上展示文字</button>
      <input value={text} onChange={(e) => { setText(e.target.value) }} />
    </>
  )
}
export default UseRef;