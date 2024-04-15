import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import AcceptedApplicantsTable from "@/Pages/Professor/AcceptedApplicantsTable.jsx";

const AcceptedApplicants = ({auth, acceptedApplicants}) => {
    return (
        <Authenticated user={auth.user} role={auth.role}>
            <div className="mt-12 space-y-8">
                {acceptedApplicants.map((thesis, idx) =>
                    <AcceptedApplicantsTable key={idx} thesisTitle={thesis.title} candidates={thesis.acceptedCandidates}/>
                )}
            </div>
        </Authenticated>
    );
}

export default AcceptedApplicants
