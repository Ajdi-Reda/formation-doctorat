import { Head } from "@inertiajs/react";
import ThesesApplicants from "./ThesesApplicants.jsx";
import { toast } from "react-hot-toast";
import { usePage } from "@inertiajs/react";
import AuthLayout from "@/Layouts/AuthLayout.jsx";

const Dashboard = ({ auth, applicants }) => {
    const { flash } = usePage().props;

    if (flash.message) {
        toast.success(flash.message);
    }
    console.log(auth);
    return (
        <AuthLayout user={auth.user} role={auth.role}>
            <Head title="Dashboard" />
            <ThesesApplicants applicants={applicants} />
        </AuthLayout>
    );
};

export default Dashboard;
