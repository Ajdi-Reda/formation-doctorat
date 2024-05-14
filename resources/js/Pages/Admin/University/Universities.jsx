import React, { useState } from "react";
import ActionsDropdown from "@/Pages/Professor/ActionsDropdown.jsx";
import Modal from "@/Components/Modal.jsx";
import ModalMessage from "@/Components/ModalMessage";
import toast from "react-hot-toast";
import AuthLayout from "@/Layouts/AuthLayout";
import AddEditUniversity from "./AddEditUniversity";
import { router } from "@inertiajs/react";

const Universities = ({ universities, auth }) => {
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [university, setUniversity] = useState("");
    const onClose = () => {
        setOpen(false);
        setOpenEdit(false);
    };

    const handleEditUniversity = (university) => {
        setOpenEdit(true);
        setUniversity(university);
    };

    const handleDeleteModal = (university) => {
        setOpenDeleteModal(true);
        setUniversity(university);
    };

    const handleDeleteUniversity = () => {
        console.log("h");
        const id = university.id;
        router.delete(`/admin/universities/${id}`, {
            onSuccess: () => {
                toast.success("University Successfully Deleted");
                setOpenDeleteModal(false);
            },
        });
    };

    return (
        <AuthLayout user={auth.user} role={auth.role}>
            <div className="">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">
                            Universities
                        </h1>
                        <p className="mt-2 text-sm text-gray-700">
                            A list of all the universities available.
                        </p>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="m-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Add new university
                        </button>
                    </div>
                </div>
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2  sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <div className=" shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                {universities.length === 0 ? (
                                    <p className="p-4 text-sm text-gray-700">
                                        No universities have been added to the
                                        database.
                                    </p>
                                ) : (
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    Address
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    Chancellor
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    Chancellor Email
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    Chancellor Phone Number
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                ></th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {universities.map((university) => (
                                                <tr key={university.id}>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                        {university.name}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {university.address}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {university.Chancellor}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {
                                                            university.ChancellorEmail
                                                        }
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {
                                                            university.ChancellorPhoneNumber
                                                        }
                                                    </td>
                                                    <td>
                                                        <ActionsDropdown
                                                            handleEditModal={() =>
                                                                handleEditUniversity(
                                                                    university
                                                                )
                                                            }
                                                            handleDeleteModal={() =>
                                                                handleDeleteModal(
                                                                    university
                                                                )
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>

                            {/* Modals */}
                            {/* Add/Edit University Modal */}
                            {open && (
                                <Modal show={open} onClose={onClose}>
                                    <AddEditUniversity onClose={onClose} />
                                </Modal>
                            )}
                            {/* Edit University Modal */}
                            {openEdit && (
                                <Modal show={openEdit} onClose={onClose}>
                                    <AddEditUniversity
                                        onClose={onClose}
                                        university={university}
                                    />
                                </Modal>
                            )}
                            {/* Delete Confirmation Modal */}
                            {openDeleteModal && (
                                <ModalMessage
                                    header={"Delete University"}
                                    open={openDeleteModal}
                                    message={
                                        "Are you sure you want to Delete this university?"
                                    }
                                    onClose={() => {
                                        setOpenDeleteModal(false);
                                    }}
                                    onConfirm={handleDeleteUniversity}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
};

export default Universities;
