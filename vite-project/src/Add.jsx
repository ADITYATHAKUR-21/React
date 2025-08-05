import React from "react";
import { useState } from "react";

function Add() {
  const [counter, setcounter] = useState(0);

  // let counter = 100;
  const AddValue = () => {
    setcounter(counter + 1);
  };

  const RemoveValue = () => {
    setcounter(counter-1);
  }
  return (
    <div className="text-center  ">
      <h1>Aditya is great guy </h1>
      <h2>curent Value: {counter}</h2>
      <button onClick={AddValue} className="border bg-green-700 rounded-xl p-2">Add </button>
      <button onClick={RemoveValue} className="border bg-blue-950 mt-2 p-2 rounded-xl">Remove</button>

    </div>
  );
}

export default Add;
