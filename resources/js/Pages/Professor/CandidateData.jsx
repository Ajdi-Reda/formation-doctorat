import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import PersonalInfoLayout from "@/features/applicationForm/PersonalInfoLayout.jsx";
import BacDetailsLayout from "@/features/applicationForm/BacDetailsLayout.jsx";
import LicenseDetailsLayout from "@/features/applicationForm/LicenceDetailsLayout.jsx";
import MasterDetailsLayout from "@/features/applicationForm/MasterDetailsLayout.jsx";
import DocumentsLayout from "@/Pages/Professor/DocumentsLayout.jsx";
import { router, useForm } from "@inertiajs/react";

const CandidateData = ({ candidateData, auth, showActionButtons }) => {
    console.log(showActionButtons);
    const personalData = candidateData.personalData;
    const bac = candidateData.bacDetails;
    const licence = candidateData.licenceDetails;
    const master = candidateData.masterDetails;
    const documents = {
        cv: personalData.cv,
        recommendationLetter1: personalData.recommendationLetter1,
        recommendationLetter2: personalData.recommendationLetter2,
    };
    const { data, setData, post } = useForm({
        accepted: "pending",
        thesisId: candidateData.thesisId,
    });

    const handleCandidateStatus = (e) => {
        e.preventDefault();
        post(`/professor/dashboard/candidate/${personalData.id}/status`, {
            thesisId: data.thesisId,
        });
    };

    const handleDownloadFiles = () => {
        const id = personalData.id;
        router.get(`/professor/download/${id}`, {
            thesisId: data.thesisId,
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <form onSubmit={handleCandidateStatus}>
                <div className="mt-16 space-y-4">
                    <div className="flex justify-between">
                        <h2 className="text-xl font-semibold">{`Candidate #${personalData.id}`}</h2>
                        <button
                            type="button"
                            onClick={handleDownloadFiles}
                            className="focus:outline-none text-white bg-indigo-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                            Download Files
                        </button>
                    </div>
                    <PersonalInfoLayout personalData={personalData} />
                    <BacDetailsLayout bac={bac} />
                    <LicenseDetailsLayout licence={licence} />
                    <MasterDetailsLayout master={master} />
                    <DocumentsLayout documents={documents} />
                </div>
                {showActionButtons ? (
                    <div className="mt-4">
                        <button
                            type="submit"
                            onClick={() => setData("accepted", "rejected")}
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                            Reject
                        </button>
                        <button
                            type="submit"
                            onClick={() => setData("accepted", "accepted")}
                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                            Accept
                        </button>
                    </div>
                ) : null}
            </form>
        </AuthenticatedLayout>
    );
};

export default CandidateData;
