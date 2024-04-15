import React from "react";

const ApplicationProgress = ({ currentStep, totalSteps }) => {
    const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

    const steps = [
        "Course selection",
        "Personal details",
        "Qualifications",
        "Documents",
        "Summary",
    ];

    return (
        <div className="mt-12">
            <div className="flex justify-between relative before:absolute before:content-[''] before:w-full before:bg-gray-200 before:-translate-y-1/2 before:h-[3px] before:-z-[1] before:top-1/2 before:left-0">
                <div
                    className="absolute bg-blue-500 top-1/2 left-0 -translate-y-1/2 w-0 h-[3px] -z-[1] transition-all duration-1000"
                    style={{ width: `${progress}%` }}
                ></div>
                {steps.map((step, idx) => (
                    <div
                        key={idx}
                        className={`${
                            idx < currentStep
                                ? "bg-indigo-600 transition-all duration-1000 text-white"
                                : "bg-gray-100"
                        } border rounded-sm py-2 px-3`}
                    >
                        {step}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ApplicationProgress;
