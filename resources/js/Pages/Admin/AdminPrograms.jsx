import React, { useState } from "react";
import { formatDateTime } from "@/Components/utils/HelperFunctions.js";
import ActionsDropdown from "@/Pages/Professor/ActionsDropdown.jsx";
import Modal from "@/Components/Modal.jsx";
import AddEditProgram from "./AddEditProgram";
import { router } from "@inertiajs/react";
import ModalMessage from "@/Components/ModalMessage";
import toast from "react-hot-toast";
import AuthLayout from "@/Layouts/AuthLayout";
import { useTranslation } from "react-i18next";

const AdminPrograms = ({ programs, universities, auth }) => {
    const { t } = useTranslation("admin");
    console.log(programs);
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [program, setProgram] = useState("");
    const onClose = () => {
        setOpen(false);
        setOpenEdit(false);
    };

    const handleEditProgram = (program) => {
        setOpenEdit(true);
        setProgram(program);
    };
    const handleDeleteModal = (program) => {
        setOpenDeleteModal(true);
        setProgram(program);
    };

    const handleDeleteProgram = () => {
        const id = program.id;
        router.delete(`/admin/programs/destroy/${id}`, {
            onSuccess: () => {
                toast.success(t("programs.successDelete"));
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
                            {t("programs.programs")}
                        </h1>
                        <p className="mt-2 text-sm text-gray-700">
                            {t("programs.programDescription")}
                        </p>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="m-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            {t("programs.addProgram")}
                        </button>
                    </div>
                </div>
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <div className=" shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                {programs.length === 0 ? (
                                    <p className="p-4 text-sm text-gray-700">
                                        {t("programs.noPrograms")}
                                    </p>
                                ) : (
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    {t("programs.programName")}
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    {t("programs.creationDate")}
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    {t("programs.startDate")}
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    {t("programs.endDate")}
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    {t("programs.responsible")}
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                ></th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {programs.map((program) => (
                                                <tr key={program.id}>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                        {program.title}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {formatDateTime(
                                                            program.created_at
                                                        )}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {program.startDate}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {program.endDate}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {program.responsible}
                                                    </td>
                                                    <td>
                                                        <ActionsDropdown
                                                            handleEditModal={() =>
                                                                handleEditProgram(
                                                                    program
                                                                )
                                                            }
                                                            handleDeleteModal={() =>
                                                                handleDeleteModal(
                                                                    program
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

                            {open && (
                                <Modal show={open} onClose={onClose}>
                                    <AddEditProgram
                                        onClose={onClose}
                                        universities={universities}
                                    />
                                </Modal>
                            )}
                            {openEdit && (
                                <Modal show={openEdit} onClose={onClose}>
                                    <AddEditProgram
                                        onClose={onClose}
                                        program={program}
                                        universities={universities}
                                    />
                                </Modal>
                            )}
                            {openDeleteModal && (
                                <ModalMessage
                                    header={t("programs.deleteProgram")}
                                    open={openDeleteModal}
                                    message={t("programs.confirmDelete")}
                                    onClose={() => {
                                        setOpenDeleteModal(false);
                                    }}
                                    onConfirm={handleDeleteProgram}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
};

export default AdminPrograms;
