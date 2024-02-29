import React from 'react';

import { MdAdd, MdHorizontalRule } from "react-icons/md";

const HorzCard = () => {
  return (
    <div className="rounded-xl bg-gray-100 w-[360px] m-auto my-10 p-4 flex justify-between items-center">
      {/* text */}
      <div className="flex flex-col justify-start">
        <h4 className="font-bold text-base">Ticket</h4>
        <p className="text-sm text-gray-400">Age 2-12</p>
      </div>
      {/* stepper */}
      <div className="flex justify-between items-center gap-4">
        <button className="size-7 border  border-gray-400 rounded-full">
          <MdHorizontalRule />
        </button>
        <p className="text-sm">2</p>
        <button className="size-7 border  border-gray-400 rounded-full">
          <MdAdd />
        </button>
      </div>
    </div>
  );
};

export default HorzCard;
