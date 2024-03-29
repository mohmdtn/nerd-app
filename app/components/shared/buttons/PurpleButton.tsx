interface PurpleButtonProps {
  onclick: () => void;
  disabled: boolean;
  text: string;
}

export const PurpleButton = ({
  onclick,
  disabled,
  text,
}: PurpleButtonProps) => {
  return (
    <button
      onClick={onclick}
      disabled={disabled}
      className="h-11 w-full rounded-lg bg-[#9373EE] px-2 text-sm text-white duration-200 hover:opacity-70 disabled:opacity-80"
    >
      {text}
    </button>
  );
};
