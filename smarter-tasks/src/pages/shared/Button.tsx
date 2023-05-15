import { ButtonHTMLAttributes } from "react";
const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const className =
    "bg-black text-white p-2 border rounded-lg font-bold uppercase border-violet-500 w-full " +
    props.className;
  // delete props.className;

  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  );
};

export default Button;
