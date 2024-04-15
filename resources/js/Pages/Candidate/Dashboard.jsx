import {Head} from "@inertiajs/react";
import Programs from "@/features/programs/Programs.jsx";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import Applications from "@/Pages/Candidate/Applications.jsx";

const Dashboard = ({auth, applications}) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            role={auth.role}
        >
            <Head title="Dashboard"/>
            <Applications applications={applications}/>
        </AuthenticatedLayout>
    );
}
export default Dashboard;
