import React from "react";
const data = [
  {
    id: 0,
    name: "Bishal",
    age: 21,
  },
  {
    id: 1,
    name: "Bivek",
    age: 22,
  },
  {
    id: 2,
    name: "Ganesh",
    age: 23,
  },
  {
    id: 3,
    name: "Subin",
    age: 24,
  },
  {
    id: 4,
    name: "Nischal",
    age: 25,
  },
  {
    id: 5,
    name: "Sanjay",
    age: 26,
  },
  {
    id: 6,
    name: "Pujan",
    age: 27,
  },
  {
    id: 7,
    name: "Bipin",
    age: 28,
  },
  {
    id: 1,
    name: "Dhiraj",
    age: 29,
  },
];

const HooksArray = () => {
  const [state, setState] = React.useState(data);

  const handleClick = () => {
    setState([]);
  };

  const remElm = (id) => {

  };
  return (
    <>
      {state.map((data) => {
        return (
          <h1 key={data.id}>
            Name: {data.name} Age: {data.age}
            <button onClick={remElm(data.id)}>Remove</button>
          </h1>
        );
      })}
      <h2 onClick={handleClick} style={{ cursor: "pointer" }}>
        Clear All
      </h2>
    </>
  );
};
export default HooksArray;