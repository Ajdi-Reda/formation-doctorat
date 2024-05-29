import { useState } from "react";
import Modal from "@/Components/Modal.jsx";
import ModalMessage from "@/Components/ModalMessage.jsx";
import { router } from "@inertiajs/react";
import { toast } from "react-hot-toast";

const Applications = ({ applications }) => {
    const [open, setOpen] = useState(false);
    const [appId, setAppId] = useState("");
    const [thesisAccepted, setThesisAccepted] = useState(false);

    const sortApplications = (applications) => {
        const acceptedApplications = applications.filter(
            (application) => application.status === "accepted"
        );
        const otherApplications = applications.filter(
            (application) => application.status !== "accepted"
        );
        return [...acceptedApplications, ...otherApplications];
    };
    const onConfirm = () => {
        router.post(
            `/candidate/application/${appId}`,
            { appId },
            {
                onSuccess: () => {
                    toast.success("Thesis Successfully accepted");
                    setOpen(false);
                },
                onFinish: () => setThesisAccepted(true),
            }
        );
    };

    console.log(applications);
    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead>
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Application id
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Thesis
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                status
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            ></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {sortApplications(applications).map(
                                            (application) => (
                                                <tr key={application.id}>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {application.id}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {
                                                            application.thesisTitle
                                                        }
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {application.status}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {application.status ===
                                                        "accepted" ? (
                                                            application.accepted ? (
                                                                <button
                                                                    type="button"
                                                                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-4 py-2 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                                                >
                                                                    <a
                                                                        href={
                                                                            application.thesisOutline
                                                                        }
                                                                        target="_blank"
                                                                    >
                                                                        Thesis
                                                                        Outline
                                                                    </a>
                                                                </button>
                                                            ) : (
                                                                <button
                                                                    type="button"
                                                                    disabled={
                                                                        application.accepted
                                                                    }
                                                                    onClick={() => {
                                                                        setOpen(
                                                                            !open
                                                                        );
                                                                        setAppId(
                                                                            application.id
                                                                        );
                                                                    }}
                                                                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-4 py-2 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                                                >
                                                                    Accept
                                                                </button>
                                                            )
                                                        ) : (
                                                            ""
                                                        )}
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalMessage
                    open={open}
                    header={"Accept thesis"}
                    message={
                        "Are you sure you want to accept this thesis? " +
                        "you won't be able to accept another thesis."
                    }
                    onClose={() => setOpen(!open)}
                    onConfirm={onConfirm}
                    btn="Confirm"
                />
            </div>
        </>
    );
};

export default Applications;
