import React from "react";

function Person({ item }) {
  return (
    <div className="flex mb-5">
      <div className="w-16 h-16 mr-2">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full rounded-full"
        />
      </div>
      <div className="text-lg sm-text-xl">
        <h2 className="font-semibold">{item.name}</h2>
        <p className="text-gray-500">{item.age} years</p>
      </div>
    </div>
  );
}

export default Person;
