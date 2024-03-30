"use client";

import { BsPinAngleFill } from "react-icons/bs";
import { BsPinAngle } from "react-icons/bs";

import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";

import { FaRegTrashCan } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import IconButton from "./buttons/IconButton";

import { useContext, useEffect, useState } from "react";

import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

import toast from "react-hot-toast";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { SiteContext } from "@/app/context/SiteContext";
TimeAgo.addDefaultLocale(en);

interface HistoryItemProps {
  id: number;
  title: string;
  language: string;
  createdAt: Date;
}

interface HistoryProps {
  isOpen: boolean;
  datas: HistoryItemProps[];
}

const History = ({ isOpen, datas }: HistoryProps) => {
  const [search, setSearch] = useState("");
  const [data, setdata] = useState(datas);

  useEffect(() => {
    setdata(datas);
    if (search.length >= 1) {
      setdata((prev) =>
        prev.filter((item) =>
          item.title.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()),
        ),
      );
    }
  }, [search, datas]);

  return (
    <section
      className={`absolute end-0 top-full z-40 h-[calc(100vh-3.5rem)] w-full flex-col gap-3 bg-[#F8F8F8] p-6 md:h-[calc(100vh-5rem)] md:max-w-[24.438rem] ${isOpen ? "flex" : "hidden"}`}
    >
      <section className="flex items-center justify-center gap-3">
        <div className={`relative mb-2 flex w-full items-center justify-start`}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
            className="h-11 w-full rounded-lg bg-white p-4  ps-10 text-sm focus:outline-none"
          />
          <IoSearch size={21} className="absolute start-3 text-[#747474]" />
        </div>
        <button
          onClick={() => setSearch("")}
          className={`flex h-9 items-center justify-center text-2xl text-[#747474] duration-200 ${search.length > 0 ? "w-9 opacity-100" : "w-0 opacity-0"}`}
        >
          <RxCross2 />
        </button>
      </section>
      <section className="flex flex-col gap-3">
        {data.length > 0 ? (
          data.map((item) => (
            <HistoryItem
              key={item.id}
              id={item.id}
              title={item.title}
              language={item.language}
              createdAt={item.createdAt}
            />
          ))
        ) : (
          <h1 className="p-3 text-center text-lg text-[#747474]">
            No Item Found
          </h1>
        )}
      </section>
    </section>
  );
};

const HistoryItem = ({ title, id, createdAt, language }: HistoryItemProps) => {
  const { setSearchHistory, searchHistory } = useContext(SiteContext);

  const [isPin, setIsPin] = useState(false);
  const [isMark, setIsMark] = useState(false);

  const timeAgo = new TimeAgo("en-US");

  const deleteHandle = () => {
    setSearchHistory(
      searchHistory.filter((item: { id: number }) => item.id !== id),
    );
    toast.success("Item Deleted Successfuly.");
  };

  return (
    <section className="h-min w-full rounded-lg border border-[#EFEFEF] bg-white px-4 py-3">
      <div className="flex justify-between">
        <h4 className="w-1/2 truncate text-base font-normal text-[#181818]">
          {title}
        </h4>
        <div className="flex gap-1">
          <IconButton
            active={isPin}
            onclick={() => setIsPin((prev) => !prev)}
            IconActive={BsPinAngleFill}
            IconNormal={BsPinAngle}
          />
          <IconButton
            active={isMark}
            onclick={() => setIsMark((prev) => !prev)}
            IconActive={FaBookmark}
            IconNormal={FaRegBookmark}
          />
          <IconButton
            onclick={deleteHandle}
            IconActive={FaTrashCan}
            IconNormal={FaRegTrashCan}
          />
        </div>
      </div>
      <div className="mt-2 flex justify-between text-xs text-[#B9BAC0]">
        <h5>{language}</h5>
        <h5>{timeAgo.format(createdAt)}</h5>
      </div>
    </section>
  );
};

export default History;
