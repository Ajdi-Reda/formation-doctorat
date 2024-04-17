import React, { useState } from "react";
import AdminDashboardLayout from "./AdminDashboard";
import { formatDateTime } from "@/Components/utils/HelperFunctions";
import ActionsDropdown from "../Professor/ActionsDropdown";
import { router } from "@inertiajs/react";
import Modal from "@/Components/Modal";
import ModalMessage from "@/Components/ModalMessage";
import toast from "react-hot-toast";
import AddEditProfessor from "./AddEditProfessor";

const Professors = ({ professors }) => {
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [professor, setProfessor] = useState({});

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
        <AdminDashboardLayout>
            <div className=" mt-6">
                <h1 className="text-2xl font-bold mb-4">Professors</h1>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    First Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Last Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Phone Number
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date of Creation
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Number of theses
                                </th>
                                <th scope="col" className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {professors.map((professor) => (
                                <tr
                                    onClick={() =>
                                        handleProfessorClick(professor)
                                    }
                                    key={professor.id}
                                    className="bg-white border-b"
                                >
                                    <td className="px-6 py-4 font-medium whitespace-nowrap ">
                                        {professor.firstName}
                                    </td>
                                    <td className="px-6 py-4">
                                        {professor.lastName}
                                    </td>
                                    <td className="px-6 py-4">
                                        {professor.phoneNumber}
                                    </td>
                                    <td className="px-6 py-4">
                                        {formatDateTime(professor.created_at)}
                                    </td>
                                    <td className="px-6 py-4">
                                        {professor.numberTheses}
                                    </td>
                                    <td>
                                        <ActionsDropdown
                                            handleEditModal={() =>
                                                handleEditProfessor(professor)
                                            }
                                            handleDeleteModal={() =>
                                                handleDeleteModal(professor)
                                            }
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="m-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Add new Professor
                    </button>
                    {open && (
                        <Modal show={open} onClose={onClose}>
                            <AddEditProfessor onClose={onClose} />
                        </Modal>
                    )}
                    {openEdit && (
                        <Modal show={openEdit} onClose={onClose}>
                            <AddEditProfessor
                                onClose={onClose}
                                professor={professor}
                            />
                        </Modal>
                    )}
                    {openDeleteModal && (
                        <Modal
                            show={openDeleteModal}
                            onClose={() => setOpenDeleteModal(!openDeleteModal)}
                        >
                            <ModalMessage
                                header={"Delete Professor"}
                                message={
                                    "Are you sure you want to Delete this Professor?"
                                }
                                onClose={() =>
                                    setOpenDeleteModal(!openDeleteModal)
                                }
                                onConfirm={handleDeleteProfessor}
                            />
                        </Modal>
                    )}
                </div>
            </div>
        </AdminDashboardLayout>
    );
};

export default Professors;
