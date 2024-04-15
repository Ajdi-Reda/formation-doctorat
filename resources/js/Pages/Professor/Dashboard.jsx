import { Head } from "@inertiajs/react";
import ThesesApplicants from "./ThesesApplicants.jsx";
import { toast } from "react-hot-toast";
import { usePage } from '@inertiajs/react';
import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";

const Dashboard = ({ auth, applicants }) => {
    const { flash } = usePage().props;

    if (flash.message) {
        toast.success(flash.message);
    }

console.log(applicants)
    return (
        <Authenticated user={auth.user} role={auth.role}>
            <Head title="Dashboard" />
            <ThesesApplicants applicants={applicants} />
        </Authenticated>
    );
}

export default Dashboard;
