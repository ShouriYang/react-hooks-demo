import React, { useState, useEffect, useCallback } from 'react';
function UseWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientWidth,
  })
  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientWidth,
    })
  }, [])
  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [onResize])
  return size
}
function ShowSize() {
  const size = UseWinSize()
  return (
    <>
      <div>页面Size:{size.width}x{size.height}</div>
    </>
  )
}
export default ShowSize;