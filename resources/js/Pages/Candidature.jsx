import MainLayout from "@/Layouts/MainLayout";
import Application from "@/features/applicationForm/Application";
import React from "react";

const Candidature = ({ fields }) => {
    return (
        <MainLayout>
            <Application fields={fields} />
        </MainLayout>
    );
};

export default Candidature;
