"use client";

import { SiteContext } from "@/app/context/SiteContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { IconType } from "react-icons";

interface MenuLinkProps {
  text: string;
  url: string;
  Icon: IconType;
}

const MenuLink = ({ text, url, Icon }: MenuLinkProps) => {
  const pathname = usePathname();
  const { setIsMenuOpen } = useContext(SiteContext);

  return (
    <Link
    onClick={() => setIsMenuOpen(false)}
      className={`flex h-[3.125rem] items-center gap-3 border-s-4 px-3.5 text-sm leading-[2.875rem] hover:bg-white ${
        pathname === `/${url}` && "border-[#9373EE] bg-gradient-to-r from-[#F2EEFD] to-[#f2eefd37]"
      }`}
      href={`/${url}`}
    >
      <Icon
        className={` ${
          pathname === `/${url}` ? "text-purple-600" : "text-gray-400"
        }`}
        size="21px"
      />
      {text}
    </Link>
  );
};

export default MenuLink;
