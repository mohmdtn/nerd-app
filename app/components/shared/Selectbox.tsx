"use client";

import React, { useState } from "react";
import { LiaAngleDownSolid } from "react-icons/lia";

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
      className="relative flex h-8 max-w-36 cursor-pointer items-center justify-between rounded-3xl bg-gray-200 px-3 text-sm text-gray-600"
    >
      {value}
      <LiaAngleDownSolid className="text-gray-800" />
      <div
        className={`absolute left-0 flex w-full flex-col rounded-xl bg-white p-1 shadow-sm duration-200 ${
          isOpen ? "top-[110%] opacity-100" : "pointer-events-none top-6 opacity-0"
        }`}
      >
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onchange(option.id)}
            className={`rounded-md py-2 font-semibold hover:bg-gray-200 ${
              value === option.id ? "text-purple-600" : "text-gray-900"
            }`}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Selectbox;
