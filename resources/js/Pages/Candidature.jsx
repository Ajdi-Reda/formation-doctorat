import {React, useEffect} from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import Application from "@/features/applicationForm/Application";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import ProgramFieldsDisplay from "@/features/programs/ProgramFieldsDisplay.jsx";

const Candidature = ({ fields, user, formData }) => {
    return (
        <>
            {user ? (
                <>
                    <div className="container mx-auto">
                    <Application fields={fields} user={user} formData={formData}/>
                    </div>
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
