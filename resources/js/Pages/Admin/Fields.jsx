import React, { useState } from "react";
import AdminDashboardLayout from "./AdminDashboard";
import { formatDateTime } from "@/Components/utils/HelperFunctions";
import ActionsDropdown from "../Professor/ActionsDropdown";
import { router } from "@inertiajs/react";
import AddField from "./AddField";
import Modal from "@/Components/Modal";
import EditField from "./EditField";
import ModalMessage from "@/Components/ModalMessage";
import toast from "react-hot-toast";

const Fields = ({ fields, programs }) => {
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [field, setField] = useState("");
    const onClose = () => {
        setOpen(false);
        setOpenEdit(false);
    };

    const handleEditField = (field) => {
        setOpenEdit(true);
        setField(field);
    };
    const handleDeleteModal = (field) => {
        setOpenDeleteModal(true);
        setField(field);
    };

    const handleDeleteField = () => {
        const id = field.id;
        router.delete(`/admin/fields/${id}`, {
            onSuccess: () => {
                toast.success("Field Successfully Deleted");
                setOpenDeleteModal(false);
            },
        });
    };
    return (
        <AdminDashboardLayout>
            <div className=" mt-6">
                <h1 className="text-2xl font-bold mb-4">Programs</h1>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date of creation
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Number of theses
                                </th>
                                <th scope="col" className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {fields.map((field) => (
                                <tr
                                    key={field.id}
                                    className="bg-white border-b"
                                >
                                    <td className="px-6 py-4 font-medium whitespace-nowrap ">
                                        {field.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {formatDateTime(field.created_at)}
                                    </td>
                                    <td className="px-6 py-4">
                                        {field.numberTheses}
                                    </td>
                                    <td>
                                        <ActionsDropdown
                                            handleEditModal={() =>
                                                handleEditField(field)
                                            }
                                            handleDeleteModal={() =>
                                                handleDeleteModal(field)
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
                        Add new Field
                    </button>
                    {open && (
                        <Modal show={open} onClose={onClose}>
                            <AddField onClose={onClose} programs={programs} />
                        </Modal>
                    )}
                    {openEdit && (
                        <Modal show={openEdit} onClose={onClose}>
                            <EditField onClose={onClose} field={field} />
                        </Modal>
                    )}
                    {openDeleteModal && (
                        <Modal
                            show={openDeleteModal}
                            onClose={() => setOpenDeleteModal(!openDeleteModal)}
                        >
                            <ModalMessage
                                header={"Delete Field"}
                                message={
                                    "Are you sure you want to Delete this Field?"
                                }
                                onClose={() => {
                                    setOpenDeleteModal(!openDeleteModal);
                                }}
                                onConfirm={handleDeleteField}
                            />
                        </Modal>
                    )}
                </div>
            </div>
        </AdminDashboardLayout>
    );
};

export default Fields;
