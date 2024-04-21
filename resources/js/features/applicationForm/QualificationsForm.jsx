import React from "react";
import { useForm } from "@inertiajs/react";
import BacForm from "@/features/applicationForm/BacForm.jsx";
import LicenceForm from "@/features/applicationForm/LicenceForm.jsx";
import MasterForm from "@/features/applicationForm/MasterForm.jsx";

const QualificationsForm = ({ children, handleIncrementStep, formData }) => {
    const { data, setData, post, errors } = useForm({
        formName: "application_form",
        application_id: "",
        bYear: "",
        city: "",
        bEstablishment: "",
        massarCode: "",
        option: "",
        mention: "",
        bacAverage: "",
        nationalBacAverage: "",
        regionalExamAverage: "",
        bacDiploma: "",
        lType: "",
        lYear: "",
        lBranch: "",
        lEstablishment: "",
        semester1: "",
        semester2: "",
        semester3: "",
        semester4: "",
        semester5: "",
        semester6: "",
        licenceDiploma: "",
        mBranch: "",
        mYear: "",
        mEstablishment: "",
        semester7: "",
        semester8: "",
        semester9: "",
        semester10: "",
        masterDiploma: "",
        ...formData.bacDetails,
        ...formData.licenceDetails,
        ...formData.masterDetails,
    });
    const formCompleted = formData.qualificationsFormCompleted;
    function handleSubmit(e) {
        e.preventDefault();
        post("/form2");
        handleIncrementStep();
    }

    return (
        <form onSubmit={handleSubmit} className="mt-6 space-y-3">
            <BacForm
                data={data}
                errors={errors}
                setData={setData}
                completed={formCompleted}
            />
            <LicenceForm
                data={data}
                errors={errors}
                setData={setData}
                completed={formCompleted}
            />
            <MasterForm
                data={data}
                errors={errors}
                setData={setData}
                completed={formCompleted}
            />
            {children}
        </form>
    );
};

export default QualificationsForm;
