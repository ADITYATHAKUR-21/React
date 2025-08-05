import { useState } from "react";
import React from "react";

const BgChanger = () => {
  const [color, setColor] = useState("red");
  return (
    <div className="w-full h-screen duration-200" style={{ background: color }}>
      <div className=" fixed  flex flex-wrap justify-center inset-x-0  bottom-12  ">
        <div className="flex flex-wrap justify-center rounded-4xl bg-white px-6 py-2 gap-5">
        <button
          onClick={() => setColor("#164e63")}
          className=" cursor-pointer px-10 py-3 bg-cyan-900 rounded-3xl font-bold text-white outline-0"
        >
          Red
        </button>
        <button
          onClick={() => setColor("	#404040")}
          className="cursor-pointer  px-10 py-3 bg-neutral-700 rounded-3xl font-bold text-white outline-0"
        >
          Red
        </button>
        <button
          onClick={() => setColor("#db2777")}
          className="cursor-pointer px-10 py-3 bg-pink-600 rounded-3xl font-bold text-white outline-0"
        >
          Red
        </button>
        </div>
      </div>
    </div>
  );
};

export default BgChanger;
