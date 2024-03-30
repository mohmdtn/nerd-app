import { FiLoader } from "react-icons/fi";

interface PurpleButtonProps {
  onclick: () => void;
  disabled: boolean;
  text: string;
  loading: boolean;
}

export const PurpleButton = ({
  onclick,
  disabled,
  loading,
  text,
}: PurpleButtonProps) => {
  return (
    <button
      onClick={onclick}
      disabled={disabled}
      className="flex h-11 w-full items-center justify-center gap-3 rounded-lg bg-[#9373EE] px-2 text-sm text-white duration-200 hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-80"
    >
      {text}
      {loading && (
        <div>
          <FiLoader className="animate-spin duration-200" />
        </div>
      )}
    </button>
  );
};
