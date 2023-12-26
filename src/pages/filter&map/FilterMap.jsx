import React from "react";

const data = [
  {
    id: 1,
    title: "Header",
    price: "$1",
  },
  {
    id: 2,
    title: "Subheader",
    price: "$2",
  },
];

const Bishal = () => {
  const filteredData = data.filter(item => item.title === "Subheader");

  return (
    <>
      <div>
        <p>{filteredData.length > 0 ? filteredData[0].title : "Not found"}</p>
      </div>
      <div>
        <ul>
          {data.map(index => (
            <li key={index.id}>
              {index.title} {index.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Bishal;
