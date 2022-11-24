import React from "react";

function Person({ item }) {
  return (
    <div>
      <div>
        <img src={item.image} alt={item.name} />
      </div>
      <div>
        <h2>{item.name}</h2>
        <p>{item.age}</p>
      </div>
    </div>
  );
}

export default Person;
