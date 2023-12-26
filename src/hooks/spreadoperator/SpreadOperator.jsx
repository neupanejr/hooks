import React from 'react';

const SpreadOperator = () => {
  const [value, setValue] = React.useState({name: "Bishal", age: 21, degree: "PHD",},);
  const handleClick = () => {
    setValue({...value, name:"Neupane",},);
  }
  return(
    <>
    <h1>Name: {value.name} Age: {value.age} Degree: {value.degree}</h1>
    <button onClick={handleClick}>Update</button>
    </>
  )
}
export default SpreadOperator;