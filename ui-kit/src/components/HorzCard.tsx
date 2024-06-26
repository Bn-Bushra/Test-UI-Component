"use client";

import { MdAdd, MdHorizontalRule } from "react-icons/md";
import { useState } from "react";

const HorzCard = () => {
  const [count, setCount] = useState(2);
  function reduceCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function addCount() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div className="rounded-xl bg-gray-100 w-[360px]  mt-10 p-4 flex justify-between items-center">
      {/* text */}
      <div className="flex flex-col justify-start">
        <h4 className="font-bold text-base">Ticket</h4>
        <p className="text-sm text-gray-400">Age 2-12</p>
      </div>
      {/* stepper */}
      <div className="flex justify-between items-center gap-4">
        <button
          className="size-7 flex items-center justify-center border border-gray-400 rounded-full"
          onClick={reduceCount()}
        >
          <MdHorizontalRule size={21} />
        </button>
        <p className="text-sm">2</p>
        <button
          className="size-7 flex items-center justify-center border  border-gray-400 rounded-full"
          onClick={addCount()}
        >
          <MdAdd size={21} />
        </button>
      </div>
    </div>
  );
};

export default HorzCard;
