"use client";

import { HiBars3 } from "react-icons/hi2";
import { MdHistory } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import OutlineButton from "./buttons/OutlineButton";
import { useState } from "react";
import History from "./History";

const data = [
  {
    id: 1,
    title: "this text is for test",
    language: "english",
    createdAt: "33",
  },
  {
    id: 2,
    title: "this text is for test number two",
    language: "spanish",
    createdAt: "48",
  },
];

const Navbar = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  return (
    <nav className="relative flex h-20 items-center justify-between border-b border-[#EFEFEF] px-3 lg:px-5 xl:px-9">
      <button>
        <HiBars3 className="text-3xl text-gray-500" />
      </button>

      <div className="flex gap-3">
        <OutlineButton
          text="History"
          Icon={MdHistory}
          active={isHistoryOpen}
          onclick={() => setIsHistoryOpen((prev) => !prev)}
        />
        <OutlineButton Icon={IoShareSocialOutline} text="Share" />
      </div>
      <History isOpen={isHistoryOpen} datas={data} />
    </nav>
  );
};

export default Navbar;
