"use client";

import React, { useState } from "react";
import { LiaAngleDownSolid } from "react-icons/lia";
import { IoMdCheckmark } from "react-icons/io";

interface Option {
  id: string;
  text: string;
}

interface SelectboxProps {
  onchange: (state: string) => void;
  value: string;
  options: Option[];
}

const Selectbox = ({ onchange, value, options }: SelectboxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      className="relative flex h-11 w-full cursor-pointer items-center justify-between rounded-lg bg-[#F8F8F8] px-3 text-sm text-gray-600"
    >
      {value}
      <LiaAngleDownSolid className={`text-black duration-150 ${isOpen && "rotate-180"}`} />
      <div
        className={`absolute left-0 z-40 flex w-full flex-col gap-1 rounded-lg border bg-white p-1 shadow-sm duration-200 ${
          isOpen
            ? "bottom-[110%] opacity-100"
            : "pointer-events-none bottom-6 opacity-0"
        }`}
      >
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onchange(option.id)}
            className={`flex justify-between rounded-md px-5 py-2 text-[#747474] hover:bg-[#F8F8F8] ${
              value === option.id ? "bg-[#F2EEFD] text-black" : "text-[#747474]"
            }`}
          >
            {option.text}
            <IoMdCheckmark
              className={`${value === option.id ? "opacity-100" : "opacity-0"}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Selectbox;
