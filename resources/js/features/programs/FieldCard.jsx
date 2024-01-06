import React from "react";

const FieldCard = ({ field, handleIncrementStep }) => {
    const startDate = field.startDate.split("-");
    const endDate = field.endDate.split("-");
    const duration = endDate[0] - startDate[0];

    return (
        <div className="border p-4 mx-auto">
            <div className="flex justify-between">
                <div>
                    <h2 className="text-2xl font-semibold">
                        {field.fieldName}
                    </h2>
                    <p>{field.description}</p>
                    <p className="text-lg font-semibold mt-4">
                        {field.universityName}
                    </p>
                    <p className="text-sm">{field.address}</p>
                </div>
                <div className="p-4 space-y-4">
                    <p>
                        {duration ? `Duration: ${duration} years` : "Unknown"}
                    </p>
                    <button
                        className="border py-2 px-4 bg-indigo-600 text-white"
                        onClick={() => handleIncrementStep()}
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FieldCard;
