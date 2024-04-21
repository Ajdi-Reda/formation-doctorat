import React from "react";

const FileInput = ({ id, name, setData, errors, ...props }) => {
    return (
        <div className="mb-3">
            <input
                className="block w-full text-sm cursor-pointer "
                id={id}
                type="file"
                {...props}
                onChange={(e) => setData(name, e.target.files[0])}
            />
            {errors && (
                <p className="text-red-500 text-sm">{errors.bacDiploma}</p>
            )}
        </div>
    );
};

export default FileInput;
