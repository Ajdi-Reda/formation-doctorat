import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import PersonalInfoLayout from "@/features/applicationForm/PersonalInfoLayout.jsx";
import BacDetailsLayout from "@/features/applicationForm/BacDetailsLayout.jsx";
import LicenseDetailsLayout from "@/features/applicationForm/LicenceDetailsLayout.jsx";
import MasterDetailsLayout from "@/features/applicationForm/MasterDetailsLayout.jsx";
import DocumentsLayout from "@/Pages/Professor/DocumentsLayout.jsx";
import { router, useForm } from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton";
import PrimaryButton from "@/Components/PrimaryButton";

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
                    </div>
                    <PersonalInfoLayout personalData={personalData} />
                    <BacDetailsLayout bac={bac} />
                    <LicenseDetailsLayout licence={licence} />
                    <MasterDetailsLayout master={master} />
                    <DocumentsLayout documents={documents} />
                </div>
                {showActionButtons ? (
                    <div className="my-4  space-x-4">
                        <SecondaryButton
                            type="submit"
                            onClick={() => setData("accepted", "rejected")}
                        >
                            Reject
                        </SecondaryButton>
                        <PrimaryButton
                            type="submit"
                            onClick={() => setData("accepted", "accepted")}
                        >
                            Accept
                        </PrimaryButton>
                    </div>
                ) : null}
            </form>
        </AuthenticatedLayout>
    );
};

export default CandidateData;
