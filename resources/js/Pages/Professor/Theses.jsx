import React, { useState } from "react";
import { router } from "@inertiajs/react";
import { toast } from "react-hot-toast";
import AuthLayout from "@/Layouts/AuthLayout";
import Modal from "@/Components/Modal.jsx";
import ActionsDropdown from "@/Pages/Professor/ActionsDropdown.jsx";
import ModalMessage from "@/Components/ModalMessage.jsx";
import { formatDateTime } from "@/Components/utils/HelperFunctions.js";
import AddEditThesis from "./AddEditThesis";

const Theses = ({ auth, theses, programFields }) => {
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [thesis, setThesis] = useState("");

    const onClose = () => setOpen(false);

    const handleEditThesis = (thesis) => {
        setOpenEdit(true);
        setThesis(thesis);
    };

    const handleDeleteModal = (thesis) => {
        setOpenDeleteModal(true);
        setThesis(thesis);
    };

    const handleDeleteThesis = () => {
        const id = thesis.id;
        router.post(
            `/professor/theses/destroy/${id}`,
            { id },
            {
                onSuccess: () => {
                    toast.success("Thesis Successfully Deleted");
                    setOpenDeleteModal(false);
                },
            }
        );
    };

    return (
        <AuthLayout user={auth.user} role={auth.role}>
            <div className="">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">
                            Theses
                        </h1>
                        <p className="mt-2 text-sm text-gray-700">
                            A list of all the theses created by you.
                        </p>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="m-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Add new thesis
                        </button>
                    </div>
                </div>
                <div className="mt-8 flow-root">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Thesis Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Date of Creation
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Number of Applicants
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        ></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {theses.map((thesis) => (
                                        <tr key={thesis.id}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                {thesis.title}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                {formatDateTime(
                                                    thesis.created_at
                                                )}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                {thesis.numberOfCandidates}
                                            </td>
                                            <td>
                                                <ActionsDropdown
                                                    handleEditModal={() =>
                                                        handleEditThesis(thesis)
                                                    }
                                                    handleDeleteModal={() =>
                                                        handleDeleteModal(
                                                            thesis
                                                        )
                                                    }
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {open && (
                        <Modal show={open} onClose={onClose}>
                            <AddEditThesis
                                onClose={onClose}
                                programFields={programFields}
                            />
                        </Modal>
                    )}
                    {openEdit && (
                        <Modal
                            show={openEdit}
                            onClose={() => setOpenEdit(false)}
                        >
                            <AddEditThesis
                                onClose={() => setOpenEdit(false)}
                                programFields={programFields}
                                thesis={thesis}
                            />
                        </Modal>
                    )}
                    {openDeleteModal && (
                        <ModalMessage
                            open={openDeleteModal}
                            header={"Delete thesis"}
                            message={
                                "Are you sure you want to Delete this thesis?"
                            }
                            onClose={() => setOpenDeleteModal(false)}
                            onConfirm={handleDeleteThesis}
                        />
                    )}
                </div>
            </div>
        </AuthLayout>
    );
};

export default Theses;
