import { IconType } from "react-icons";

interface IconButtonProps {
  onclick?: () => void;
  IconActive: IconType;
  IconNormal: IconType;
  active?: boolean;
}

const IconButton = ({
  onclick,
  IconActive,
  IconNormal,
  active = false,
}: IconButtonProps) => {
  return (
    <button
      onClick={onclick}
      className={`flex size-6 items-center justify-center rounded text-base duration-200 hover:bg-[#F2EEFD] hover:text-[#9373EE] ${active ? "bg-[#F2EEFD] text-[#9373EE]" : "text-[#D7D7D7]"}`}
    >
      {active ? <IconActive /> : <IconNormal />}
    </button>
  );
};

export default IconButton;
