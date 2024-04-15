// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import { Head } from "@inertiajs/react";
// import Programs from "@/features/programs/Programs";
// import ThesesApplicants from "@/features/professor/dashboard/ThesesApplicants.jsx";
//
// export default function Dashboard({ auth, programs }) {
//     return (
//         <AuthenticatedLayout
//             user={auth.user}
//         >
//             <Head title="Dashboard" />
//
//             {auth.roles.includes('candidate') && <Programs programs={programs.programs}/>}
//             {auth.roles.includes('professor') && <ThesesApplicants auth={auth}/>}
//         </AuthenticatedLayout>
//     );
// }
