import React from 'react';

const Toggle = () => {
  const [name, setName] = React.useState("Bishal");
  
  const handleClick = () => {
    // setName(name === "Bishal" ? "Neupane" : "Bishal");
    (name == "Bishal") ? setName("Neupane") : setName("Bishal");
  }
  return(
    <>
    <h1>{name}</h1>
    <button onClick={handleClick}>Click Me</button>
    </>
  )
}
export default Toggle;