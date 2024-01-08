import React from "react";

const PrevNextBtn = ({ handleDecrementStep, form }) => {
    return (
        <div className="flex gap-2 md:gap-4 mt-4">
            <button
                className="py-2 px-3 border bg-gray-200 rounded-sm"
                onClick={handleDecrementStep}
            >
                Previous
            </button>
            <button
                className="py-2 px-3 border bg-gray-200 rounded-sm"
                type="submit"
                form={form}
            >
                Next
            </button>
        </div>
    );
};

export default PrevNextBtn;
