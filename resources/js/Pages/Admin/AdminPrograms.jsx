import { useState } from "react";
import { formatDateTime } from "@/Components/utils/HelperFunctions.js";
import ActionsDropdown from "@/Pages/Professor/ActionsDropdown.jsx";
import Modal from "@/Components/Modal.jsx";
import AddEditProgram from "./AddEditProgram";
import { router } from "@inertiajs/react";
import ModalMessage from "@/Components/ModalMessage";
import toast from "react-hot-toast";
import AuthLayout from "@/Layouts/AuthLayout";

const AdminPrograms = ({ programs, auth }) => {
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
        console.log("hello");
        router.delete(`/admin/programs/destroy/${id}`, {
            onSuccess: () => {
                toast.success("Program Successfully Deleted");
                setOpenDeleteModal(false);
            },
        });
    };
    console.log(programs);

    return (
        <AuthLayout user={auth.user} role={auth.role}>
            <div className="">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">
                            Programs
                        </h1>
                        <p className="mt-2 text-sm text-gray-700">
                            A list of all the programs available.
                        </p>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="m-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Add new program
                        </button>
                    </div>
                </div>
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <div className=" shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Program
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
                                                Start date
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                End date
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Responsible
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
                            </div>

                            {open && (
                                <Modal show={open} onClose={onClose}>
                                    <AddEditProgram onClose={onClose} />
                                </Modal>
                            )}
                            {openEdit && (
                                <Modal show={openEdit} onClose={onClose}>
                                    <AddEditProgram
                                        onClose={onClose}
                                        program={program}
                                    />
                                </Modal>
                            )}
                            {openDeleteModal && (
                                <Modal
                                    show={openDeleteModal}
                                    onClose={() =>
                                        setOpenDeleteModal(!openDeleteModal)
                                    }
                                >
                                    <ModalMessage
                                        header={"Delete Program"}
                                        message={
                                            "Are you sure you want to Delete this program?"
                                        }
                                        onClose={() => {
                                            setOpenDeleteModal(
                                                !openDeleteModal
                                            );
                                        }}
                                        onConfirm={handleDeleteProgram}
                                    />
                                </Modal>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
};

export default AdminPrograms;
