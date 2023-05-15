import React, { HTMLAttributes, InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string; // if not given `name` will be used instead
  containerProps?: HTMLAttributes<HTMLDivElement>;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const { label, name } = props;

  return (
    <div className="p-1 m-1" {...props.containerProps}>
      <label htmlFor={name} className="block text-white font-semibold mb-2">
        {label || name}
      </label>

      <input
        {...props}
        className="p-2 border rounded-lg outline-none bg-gray-800 text-white border-violet-500 w-full"
      />
    </div>
  );
};

export default InputField;
