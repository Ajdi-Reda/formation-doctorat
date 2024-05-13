import AuthLayout from "@/Layouts/AuthLayout";
import AcceptedApplicantsTable from "@/Pages/Professor/AcceptedApplicantsTable.jsx";

const AcceptedApplicants = ({ auth, acceptedApplicants }) => {
    return (
        <AuthLayout user={auth.user} role={auth.role}>
            <h1 className="text-xl my-6">
                {acceptedApplicants.length
                    ? "Accepted applicants"
                    : "You must create a thesis to see the accepted applicants."}
            </h1>
            <div className="mt-12 space-y-8">
                {acceptedApplicants.map((thesis, idx) => (
                    <AcceptedApplicantsTable
                        key={idx}
                        thesisTitle={thesis.title}
                        candidates={thesis.acceptedCandidates}
                    />
                ))}
            </div>
        </AuthLayout>
    );
};

export default AcceptedApplicants;
