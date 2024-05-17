import React from "react";

const SelectMenu = ({
    id,
    name,
    options,
    defaultValue,
    onChange,
    ...props
}) => {
    return (
        <div>
            <select
                id={id}
                name={name}
                className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={defaultValue}
                onChange={onChange}
                {...props}
            >
                {options.map((option, index) => (
                    <option key={index}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectMenu;
