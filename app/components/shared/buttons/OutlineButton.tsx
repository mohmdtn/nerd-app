import { IconType } from "react-icons";

interface OutlineButtonProps {
  text: string;
  onclick?: () => void;
  Icon: IconType;
}

function OutlineButton({ text, onclick, Icon }: OutlineButtonProps) {
  return (
    <button
      onClick={onclick}
      className="flex items-center justify-center gap-2 rounded-lg border-2 border-[#EFEFEF] px-3 py-2 text-lg text-[#747474]"
    >
      <Icon />
      {text}
    </button>
  );
}

export default OutlineButton;