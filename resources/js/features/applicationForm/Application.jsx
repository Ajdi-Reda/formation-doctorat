import React, { useState } from "react";
import ApplicationProgress from "./ApplicationProgress";
import FieldSelection from "./FieldSelection";
import PersonalDataForm from "./PersonalDataForm";
import PrevNextBtn from "./PrevNextBtn";
import QualificationsForm from "./QualificationsForm";
import DocumentForm from "./DocumentForm";

const Application = ({ fields }) => {
    const [currStep, setCurrStep] = useState(1);
    const stepForms = [FieldSelection, PersonalDataForm, QualificationsForm, DocumentForm];

    function handleIncrementStep() {
        setCurrStep(currStep + 1);
        if (currStep > 5) setCurrStep(5);
    }
    function handleDecrementStep() {
        setCurrStep(currStep - 1);
        if (currStep < 1) setCurrStep(1);
    }

    const CurrentForm = stepForms[currStep - 1]; // Adjust the index

    return (
        <>
            <ApplicationProgress currentStep={currStep} totalSteps={5} />
            <CurrentForm
                {...(currStep === 1 && { fields })}
                handleIncrementStep={handleIncrementStep}
            >
                <PrevNextBtn handleDecrementStep={handleDecrementStep} />
            </CurrentForm>
        </>
    );
};

export default Application;
