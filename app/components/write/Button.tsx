interface ButtonProps {
  activeId: string;
  id: string;
  text: string;
  onClick: (id: string) => void;
}

const Button = ({ text, activeId, id, onClick }: ButtonProps) => {
  return (
    <button
      onClick={() => onClick(id)}
      className={`rounded-lg px-2 py-1 text-sm font-medium leading-6 duration-150 ${
        activeId === id ? "bg-purple-200" : "bg-gray-100 hover:bg-gray-200"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
