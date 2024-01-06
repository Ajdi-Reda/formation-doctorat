import React, { useState } from "react";
import ApplicationProgress from "./ApplicationProgress";
import FieldSelection from "./FieldSelection";
import PersonalDataForm from "./PersonalDataForm";

const Application = ({ fields }) => {
    const [currStep, setCurrStep] = useState(1);
    const stepForms = [FieldSelection, PersonalDataForm];

    function handleIncrementStep() {
        setCurrStep(currStep + 1);
    }

    const CurrentForm = stepForms[currStep - 1]; // Adjust the index

    return (
        <>
            <ApplicationProgress currentStep={currStep} totalSteps={5} />
            <CurrentForm
                {...(currStep === 1 && { fields, handleIncrementStep })}
            />
        </>
    );
};

export default Application;
