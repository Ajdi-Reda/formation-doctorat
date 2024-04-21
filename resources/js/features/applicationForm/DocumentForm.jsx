import React from "react";
import { useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel.jsx";
import FileInput from "@/Components/FileInput.jsx";
import { useTranslation } from "react-i18next";

const DocumentForm = ({ children, handleIncrementStep, formData }) => {
    const { post, errors, data, setData } = useForm({
        formName: "document_form",
        cv: null,
        recommendationLetter1: null,
        recommendationLetter2: null,
    });
    const formCompleted = formData.documentsFormCompleted;
    const { t } = useTranslation("form");

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/form2");
        handleIncrementStep();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="py-6 mt-6 space-y-4 max-w-xl">
                    <h1 className="text-2xl">{t("documentForm.title")}</h1>
                    <div className="flex flex-col gap-2">
                        <InputLabel htmlFor="cv">
                            {t("documentForm.cvLabel")}
                        </InputLabel>
                        <FileInput
                            required={!formCompleted}
                            type="file"
                            id="cv"
                            name="cv"
                            accept="application/pdf"
                            setData={setData}
                            errors={errors.cv}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <InputLabel htmlFor="recommendationLetter1">
                            {t("documentForm.recommendationLetter1Label")}
                        </InputLabel>
                        <FileInput
                            required={!formCompleted}
                            type="file"
                            id="recommendationLetter1"
                            name="recommendationLetter1"
                            setData={setData}
                            accept="application/pdf"
                            errors={errors.recommendationLetter1}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <InputLabel htmlFor="recommendationLetter2">
                            {t("documentForm.recommendationLetter2Label")}
                        </InputLabel>
                        <FileInput
                            required={!formCompleted}
                            type="file"
                            id="recommendationLetter2"
                            name="recommendationLetter2"
                            setData={setData}
                            accept="application/pdf"
                            errors={errors.recommendationLetter2}
                        />
                    </div>

                    {children}
                </div>
            </form>
        </>
    );
};

export default DocumentForm;
