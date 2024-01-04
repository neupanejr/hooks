// import React from 'react';

// const State = () => {
//   const [change, setChange] = React.useState('1')
//   const handleClick = () => {
//     (change == '1')? setChange([]) : setChange('1')
//   }
//   return(
//     <>
//     <h1>{change}</h1>
//     <button onClick={handleClick}>Click Me</button>
//     </>
//   )
// }
// export default State;
import React from 'react'

const State = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Age: {props.img}</p>
    </div>
  )
}

export default State