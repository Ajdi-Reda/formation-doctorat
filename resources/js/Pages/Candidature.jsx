import { React } from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import Application from "@/features/applicationForm/Application";
import ProgramFieldsDisplay from "@/features/programs/ProgramFieldsDisplay.jsx";
import SimpleLayout from "@/Layouts/SimpleLayout";

const Candidature = ({ fields, auth, formData }) => {
    return (
        <>
            {auth.user ? (
                <>
                    <SimpleLayout>
                        <Application
                            fields={fields}
                            user={auth.user}
                            formData={formData}
                        />
                    </SimpleLayout>
                </>
            ) : (
                <MainLayout>
                    <ProgramFieldsDisplay fields={fields} />
                </MainLayout>
            )}
        </>
    );
};

export default Candidature;
