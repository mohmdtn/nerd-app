interface Buttons {
  id: string;
  text: string;
}

interface RadioButtonsProps {
  onchange: (state: string) => void;
  value: string;
  options: Buttons[];
}

const RadioButtons = ({ onchange, value, options }: RadioButtonsProps) => {
    
    return (
    <div className="flex h-9 w-fit rounded-full bg-gray-200 p-1 text-sm font-semibold text-gray-800">
      {options.map((option) => (
        <button
          key={option.id}
          id={`${option.id}`}
          className={`w-max rounded-full px-3 duration-300 ${
            option.id === value ? "bg-black text-white" : "bg-inherit"
          }`}
          onClick={() => onchange(option.id)}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default RadioButtons;
