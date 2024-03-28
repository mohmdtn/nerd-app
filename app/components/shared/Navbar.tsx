import { HiBars3 } from "react-icons/hi2";
import { MdHistory } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import OutlineButton from "./buttons/OutlineButton";

const Navbar = () => {
  return (
    <nav className="h-20 border-b border-[#EFEFEF] flex items-center justify-between px-9">
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
