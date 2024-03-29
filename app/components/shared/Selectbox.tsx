"use client";

import React, { useEffect, useState } from "react";
import { LiaAngleDownSolid } from "react-icons/lia";
import { IoMdCheckmark } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

interface Option {
  id: string;
  text: string;
}

interface SelectboxProps {
  onchange: (state: string) => void;
  value: string;
  options: Option[];
  searchMood?: boolean;
}

const Selectbox = ({ onchange, value, options, searchMood = false }: SelectboxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [data, setdata] = useState(options);

  useEffect(() => {
    setdata(options);
    if (search.length >= 1) {
      setdata((prev) =>
        prev.filter((item) =>
          item.text.toLocaleLowerCase().startsWith(search.toLocaleLowerCase())
        )
      );
    }
  }, [search, options]);

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative flex h-11 w-full cursor-pointer items-center justify-between rounded-lg bg-[#F8F8F8] px-3 text-sm text-gray-600"
      >
        {options.map((item) => item.id === value && item.text)}
        <LiaAngleDownSolid
          className={`text-black duration-150 ${isOpen && "rotate-180"}`}
        />
      </div>
      <div
        className={`absolute left-0 z-40 flex w-full flex-col gap-1 rounded-lg border bg-white p-3 shadow-sm duration-200 ${
          isOpen
            ? "bottom-[110%] opacity-100"
            : "pointer-events-none bottom-6 opacity-0"
        }`}
      >
        <div className={`relative mb-2 items-center justify-start ${searchMood ? "flex" : "hidden"}`}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
            className="h-11 w-full rounded-lg bg-[#F8F8F8] p-4 ps-10 focus:outline-none"
          />
          <IoSearch size={21} className="absolute start-3 text-[#747474]" />
        </div>
        {data.length > 0 ? (
          data.map((option) => (
            <button
              key={option.id}
              onClick={() => {
                setIsOpen((prev) => !prev);
                onchange(option.id);
              }}
              className={`flex justify-between rounded-md px-5 py-2 text-[#747474] hover:bg-[#F8F8F8] ${
                value === option.id
                  ? "bg-[#F2EEFD] text-black"
                  : "text-[#747474]"
              }`}
            >
              {option.text}
              <IoMdCheckmark
                className={`${
                  value === option.id ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>
          ))
        ) : (
          <h1 className="p-3 text-center text-sm text-[#747474]">No Item Found</h1>
        )}
      </div>
    </div>
  );
};

export default Selectbox;
