import React, { useEffect, useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(0);
  
  useEffect(() => {
    document.title = count + '' + setName;
  })

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window,innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  })
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleName = () => {
    setName(name + 2);
  };
  return (
    <>
      <h1>{count}</h1>
      <h2 onClick={handleClick} style={{ cursor: "pointer" }}>
        Click Me
      </h2>
      <h1>{name}</h1>
      <h2 onClick={handleName} style={{ cursor: "pointer" }}>
        Click Here
      </h2>
      <h3>{width}</h3>
    </>
  );
};
export default Hooks;