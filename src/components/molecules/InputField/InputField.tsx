import { FC } from "react";

// Components
import { Input } from "@Atoms";

// Types
interface InputFieldProps extends React.ComponentPropsWithoutRef<"input"> {
    label: string;
}

const InputField: FC<InputFieldProps> = ({ label, id, ...props }) => {
    return (
        <>
            <label
                htmlFor={id}
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                {label}
            </label>
            <div className="mt-2">
                <Input id={id} {...props} />
            </div>
        </>
    );
};

export default InputField;
