import { HiBars3 } from "react-icons/hi2";
import { MdHistory } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import OutlineButton from "./buttons/OutlineButton";

const Navbar = () => {
  return (
    <nav className="flex h-20 items-center justify-between border-b border-[#EFEFEF] px-3 lg:px-5 xl:px-9">
      <button>
        <HiBars3 className="text-3xl text-gray-500" />
      </button>

      <div className="flex gap-3">
        <OutlineButton Icon={MdHistory} text="History" />
        <OutlineButton Icon={IoShareSocialOutline} text="Share" />
      </div>
    </nav>
  );
};

export default Navbar;
