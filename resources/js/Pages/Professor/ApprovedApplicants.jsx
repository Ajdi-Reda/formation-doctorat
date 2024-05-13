import AuthLayout from "@/Layouts/AuthLayout";
import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import ApprovedApplicantsTable from "@/Pages/Professor/ApprovedApplicantsTable.jsx";
import { router } from "@inertiajs/react";

const ApprovedApplicants = ({ auth, approvedApplicants }) => {
    const onRemoveCandidate = (candidateId, thesisId) => {
        router.post(`/professor/dashboard/candidate/${candidateId}/status`, {
            accepted: "pending",
            thesisId: thesisId,
        });
    };

    return (
        <AuthLayout user={auth.user} role={auth.role}>
            <h1 className="text-xl my-6">
                {approvedApplicants.length
                    ? "Approved applicants"
                    : "You must create a thesis to see the approved applicants"}
            </h1>
            <div className="mt-12 space-y-8">
                {approvedApplicants.map((thesis, idx) => (
                    <ApprovedApplicantsTable
                        key={idx}
                        thesisTitle={thesis.title}
                        candidates={thesis.approvedCandidates}
                        onRemoveCandidate={onRemoveCandidate}
                        thesisId={thesis.id}
                    />
                ))}
            </div>
        </AuthLayout>
    );
};

export default ApprovedApplicants;
