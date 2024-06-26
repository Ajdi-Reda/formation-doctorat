import React, { useState } from "react";
import ApplicationProgress from "./ApplicationProgress";
import PersonalDataForm from "./PersonalDataForm";
import PrevNextBtn from "./PrevNextBtn";
import QualificationsForm from "./QualificationsForm";
import DocumentForm from "./DocumentForm";
import FieldSelection from "./FieldSelection";
import Summary from "@/features/applicationForm/Summary.jsx";
import { useTranslation } from "react-i18next";
import { Toaster } from "react-hot-toast";

const Application = ({ fields, user, formData }) => {
    const [currStep, setCurrStep] = useState(1);
    const stepForms = [
        FieldSelection,
        PersonalDataForm,
        QualificationsForm,
        DocumentForm,
        Summary,
    ];
    function handleIncrementStep() {
        setCurrStep((prevStep) => (prevStep < 5 ? prevStep + 1 : 5));
    }

    function handleDecrementStep() {
        setCurrStep((prevStep) => (prevStep > 1 ? prevStep - 1 : 1));
    }

    const CurrentForm = stepForms[currStep - 1];
    const { t, i18n } = useTranslation();

    return (
        <>
            <Toaster />
            <div className={i18n.language === "ar" ? "arabic-font" : ""}>
                <ApplicationProgress currentStep={currStep} />
                <CurrentForm
                    {...(currStep === 1 && { fields })}
                    handleIncrementStep={handleIncrementStep}
                    handleDecrementStep={handleDecrementStep}
                    user={user}
                    formData={formData}
                >
                    <PrevNextBtn handleDecrementStep={handleDecrementStep} />
                </CurrentForm>
            </div>
        </>
    );
};

export default Application;
