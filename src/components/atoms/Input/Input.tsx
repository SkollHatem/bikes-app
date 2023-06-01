import { FC } from "react";

const Input: FC<React.ComponentPropsWithoutRef<"input">> = (props) => {
  return (
    <input
      {...props}
      className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"
    />
  );
};

export default Input;
