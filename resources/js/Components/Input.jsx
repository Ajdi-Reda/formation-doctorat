import React from "react";

const Input = ({
    id,
    type,
    placeholder,
    value,
    onChange,
    required,
    ...rest
}) => {
    return (
        <input
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            id={id}
            type={type}
            placeholder={placeholder}
            te
            value={value}
            onChange={onChange}
            required={required}
            {...rest}
        />
    );
};

export default Input;
