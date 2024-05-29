import React, { useState } from "react";
import ActionsDropdown from "@/Pages/Professor/ActionsDropdown.jsx";
import Modal from "@/Components/Modal.jsx";
import ModalMessage from "@/Components/ModalMessage";
import toast from "react-hot-toast";
import AuthLayout from "@/Layouts/AuthLayout";
import AddEditUniversity from "./AddEditUniversity";
import { router } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

const Universities = ({ universities, auth, programs }) => {
    const { t } = useTranslation("admin");

    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [university, setUniversity] = useState(null);

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
        const id = university.id;
        router.delete(`/admin/universities/${id}`, {
            onSuccess: () => {
                toast.success(t("universities.deleteSuccess"));
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
                            {t("universities.title")}
                        </h1>
                        <p className="mt-2 text-sm text-gray-700">
                            {t("universities.description")}
                        </p>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="m-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            {t("universities.addNewUniversity")}
                        </button>
                    </div>
                </div>
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2  sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <div className=" shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                {universities.length === 0 ? (
                                    <p className="p-4 text-sm text-gray-700">
                                        {t("universities.noUniversities")}
                                    </p>
                                ) : (
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    {t("universities.name")}
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    {t("universities.address")}
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    {t(
                                                        "universities.chancellor"
                                                    )}
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    {t(
                                                        "universities.chancellorEmail"
                                                    )}
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    {t(
                                                        "universities.chancellorPhoneNumber"
                                                    )}
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
                                                        {university.chancellor}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {
                                                            university.chancellorEmail
                                                        }
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {
                                                            university.chancellorPhoneNumber
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
                                    <AddEditUniversity
                                        onClose={onClose}
                                        programs={programs}
                                    />
                                </Modal>
                            )}
                            {/* Edit University Modal */}
                            {openEdit && (
                                <Modal show={openEdit} onClose={onClose}>
                                    <AddEditUniversity
                                        onClose={onClose}
                                        university={university}
                                        programs={programs}
                                    />
                                </Modal>
                            )}
                            {/* Delete Confirmation Modal */}
                            {openDeleteModal && (
                                <ModalMessage
                                    header={t("universities.deleteUniversity")}
                                    open={openDeleteModal}
                                    message={t(
                                        "universities.deleteConfirmation"
                                    )}
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
