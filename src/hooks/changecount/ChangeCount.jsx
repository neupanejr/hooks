import React, { useState } from 'react';

const ChangeCount = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count+1);
  }
  return(
    <>
    <h1>{count}</h1>
    <h2 onClick={handleClick} style={{ cursor: "pointer"}}>Click Me</h2>
    </>
  )
}
export default ChangeCount;