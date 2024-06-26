"use client";

import { HiBars3 } from "react-icons/hi2";
import { MdHistory } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import OutlineButton from "./buttons/OutlineButton";
import { useContext, useState } from "react";
import History from "./History";
import { SiteContext } from "@/app/context/SiteContext";

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
  const { isMenuOpen, setIsMenuOpen, searchHistory } = useContext(SiteContext);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-[#EFEFEF] bg-white px-3 md:h-20 lg:px-5 xl:px-9">
      <button
        className="flex size-8 items-center justify-center rounded-md duration-200 hover:scale-125"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
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
      <History isOpen={isHistoryOpen} datas={searchHistory} />
    </nav>
  );
};

export default Navbar;
