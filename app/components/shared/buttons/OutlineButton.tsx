import { IconType } from "react-icons";

interface OutlineButtonProps {
  text: string;
  onclick?: () => void;
  Icon: IconType;
  active?: boolean;
}

function OutlineButton({
  text,
  onclick,
  Icon,
  active = false,
}: OutlineButtonProps) {
  return (
    <button
      onClick={onclick}
      className={`flex items-center justify-center gap-2 rounded-lg border-2 px-2 py-1 text-sm duration-200 md:px-3 md:py-2 md:text-lg ${active ? "border-[#F2EEFD] bg-[#F2EEFD] text-[#9373EE]" : "border-[#EFEFEF] bg-white text-[#747474] hover:bg-gray-100"}`}
    >
      <Icon size={21} />
      {text}
    </button>
  );
}

export default OutlineButton;
