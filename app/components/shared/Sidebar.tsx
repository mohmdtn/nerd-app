"use client";

import { TbWriting } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import MenuLink from "./MenuLink";
import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className="h-screen max-h-screen w-full max-w-[16.125rem] border-e border-[#EFEFEF]">
      <div className="flex h-20 items-center justify-center gap-3 border-b border-[#EFEFEF] px-4 py-[6px]">
        <Image src="/logo.svg" width={44} height={44} alt="logo" />
        <h1 className="bg-gradient-to-r from-[#4D84FF] to-[#DE8FFF] bg-clip-text text-2xl font-bold text-transparent">
          Nerd Studio
        </h1>
      </div>
      <section className="flex h-[calc(100vh-5rem)] w-full flex-col justify-between">
        <section className="flex w-full flex-col gap-2 py-2.5">
          <MenuLink text="ReWrite" url="rewrite" Icon={TbWriting} />
        </section>
        <section className="border-t border-[#EFEFEF] px-5 py-6">
          <div className="flex items-center justify-between gap-2">
            <Image
              src="/avatar.png"
              width={50}
              height={50}
              alt="User Profile"
            />
            <div>
              <h5 className="mb-1 text-sm font-semibold text-black">Sara Moradi</h5>
              <p className="text-xs text-[#747474]">Lorem</p>
            </div>
            <FaRegBell size={19} className="text-[#747474]" />
            <HiOutlineExclamationCircle size={21} className="text-[#747474]" />
          </div>
        </section>
      </section>
    </aside>
  );
};

export default Sidebar;
