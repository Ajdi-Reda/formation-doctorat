import React, { useState } from "react";
import { formatDateTime } from "@/Components/utils/HelperFunctions";
import ActionsDropdown from "../Professor/ActionsDropdown";
import { router } from "@inertiajs/react";
import Modal from "@/Components/Modal";
import ModalMessage from "@/Components/ModalMessage";
import toast from "react-hot-toast";
import AddEditProfessor from "./EditProfessor";
import AuthLayout from "@/Layouts/AuthLayout";
import EditProfessor from "./EditProfessor";
import AddProfessor from "./AddProfessor";

const Professors = ({ professors, auth, universities }) => {
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [professor, setProfessor] = useState({});
    console.log(professors);
    const onClose = () => {
        setOpen(false);
        setOpenEdit(false);
    };

    const handleEditProfessor = (professor) => {
        setOpenEdit(true);
        setProfessor(professor);
    };

    const handleDeleteModal = (professor) => {
        setOpenDeleteModal(true);
        setProfessor(professor);
    };

    const handleDeleteProfessor = () => {
        const id = professor.id;
        router.delete(`/admin/professors/${id}`, {
            onSuccess: () => {
                toast.success("Professor Successfully Deleted");
                setOpenDeleteModal(false);
            },
        });
    };

    const handleProfessorClick = (professor) => {
        const id = professor.id;
        router.get(`/admin/professors/${id}`);
    };

    return (
        <AuthLayout user={auth.user} role={auth.role}>
            <div className=" mt-6">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">
                            Professors
                        </h1>
                        <p className="mt-2 text-sm text-gray-700">
                            A list of all the Professors
                        </p>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <button
                            type="button"
                            onClick={() => setOpen(!open)}
                            className="m-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Add new Professor
                        </button>
                    </div>
                </div>
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <div className="shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                {professors.length === 0 ? (
                                    <p className="p-4 text-sm text-gray-700">
                                        No fields have been added yet.
                                    </p>
                                ) : (
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    First Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    Last Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    Email
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    Phone Number
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    University
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
                                                    Number of theses
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                ></th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            {professors.map((professor) => (
                                                <tr
                                                    key={professor.id}
                                                    className="bg-white border-b cursor-pointer"
                                                >
                                                    <td
                                                        className="px-6 py-4 font-medium whitespace-nowrap "
                                                        onClick={() =>
                                                            handleProfessorClick(
                                                                professor
                                                            )
                                                        }
                                                    >
                                                        {professor.firstName}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {professor.lastName}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {professor.email}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {professor.phoneNumber}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {
                                                            professor.university
                                                                .name
                                                        }
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {formatDateTime(
                                                            professor.created_at
                                                        )}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {professor.numberTheses}
                                                    </td>
                                                    <td>
                                                        <ActionsDropdown
                                                            handleEditModal={() =>
                                                                handleEditProfessor(
                                                                    professor
                                                                )
                                                            }
                                                            handleDeleteModal={() =>
                                                                handleDeleteModal(
                                                                    professor
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
                        </div>
                    </div>

                    {open && (
                        <Modal show={open} onClose={onClose}>
                            <AddProfessor
                                onClose={onClose}
                                universities={universities}
                            />
                        </Modal>
                    )}
                    {openEdit && (
                        <Modal show={openEdit} onClose={onClose}>
                            <EditProfessor
                                onClose={onClose}
                                professor={professor}
                            />
                        </Modal>
                    )}
                    {openDeleteModal && (
                        <ModalMessage
                            header={"Delete Professor"}
                            message={
                                "Are you sure you want to Delete this Professor?"
                            }
                            onClose={() => setOpenDeleteModal(!openDeleteModal)}
                            onConfirm={handleDeleteProfessor}
                        />
                    )}
                </div>
            </div>
        </AuthLayout>
    );
};

export default Professors;
