import React, { useState } from "react";
import { formatDateTime } from "@/Components/utils/HelperFunctions.js";
import ActionsDropdown from "../Professor/ActionsDropdown";
import Modal from "@/Components/Modal.jsx";
import ModalMessage from "@/Components/ModalMessage";
import toast from "react-hot-toast";
import AuthLayout from "@/Layouts/AuthLayout";
import { router } from "@inertiajs/react";
import AddEditField from "./AddEditField";

const Fields = ({ fields, universities, auth }) => {
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
        console.log("hel");
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
        <AuthLayout user={auth.user} role={auth.role}>
            <div>
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">
                            Fields
                        </h1>
                        <p className="mt-2 text-sm text-gray-700">
                            A list of all the fields available.
                        </p>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="m-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Add new Field
                        </button>
                    </div>
                </div>
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <div className=" shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                {fields.length === 0 ? (
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
                                                    Name
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
                                                    Number of Theses
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {fields.map((field) => (
                                                <tr key={field.id}>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                        {field.name}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {formatDateTime(
                                                            field.created_at
                                                        )}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {field.numberTheses}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        <ActionsDropdown
                                                            handleEditModal={() =>
                                                                handleEditField(
                                                                    field
                                                                )
                                                            }
                                                            handleDeleteModal={() =>
                                                                handleDeleteModal(
                                                                    field
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
                </div>
                {open && (
                    <Modal show={open} onClose={onClose}>
                        <AddEditField
                            onClose={onClose}
                            universities={universities}
                        />
                    </Modal>
                )}
                {openEdit && (
                    <Modal show={openEdit} onClose={onClose}>
                        <AddEditField
                            onClose={onClose}
                            universities={universities}
                            field={field}
                        />
                    </Modal>
                )}
                {openDeleteModal && (
                    <ModalMessage
                        open={openDeleteModal}
                        header={"Delete Field"}
                        message={"Are you sure you want to delete this field?"}
                        onClose={() => setOpenDeleteModal(!openDeleteModal)}
                        onConfirm={handleDeleteField}
                    />
                )}
            </div>
        </AuthLayout>
    );
};

export default Fields;
