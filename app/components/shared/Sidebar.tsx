"use client";

import { BsTranslate } from "react-icons/bs";
import { TbWriting } from "react-icons/tb";
import { FaSquarePen } from "react-icons/fa6";
import MenuLink from "./MenuLink";
import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className="h-screen w-full max-w-[16.125rem] border-e border-[#EFEFEF]">
      <div className="flex h-20 items-center justify-center gap-3 border-b border-[#EFEFEF] px-4 py-[6px]">
        <Image src="/logo.svg" width={44} height={44} alt="logo" />
        <h1 className="bg-gradient-to-r from-[#4D84FF] to-[#DE8FFF] bg-clip-text text-2xl font-bold text-transparent">Nerd Studio</h1>
      </div>
      <section className="flex flex-col gap-2 py-2.5">
        {/* <MenuLink text="Translate" url="translate" Icon={BsTranslate} /> */}
        <MenuLink text="ReWrite" url="rewrite" Icon={TbWriting} />
        {/* <MenuLink text="Write" url="write" Icon={FaSquarePen} /> */}
      </section>
    </aside>
  );
};

export default Sidebar;
