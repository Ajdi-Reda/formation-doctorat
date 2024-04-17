import { useState } from "react";
import { formatDateTime } from "@/Components/utils/HelperFunctions.js";
import ActionsDropdown from "@/Pages/Professor/ActionsDropdown.jsx";
import Modal from "@/Components/Modal.jsx";
import AdminDashboardLayout from "@/Pages/Admin/AdminDashboard.jsx";
import AddEditProgram from "./AddEditProgram";
import { router } from "@inertiajs/react";
import ModalMessage from "@/Components/ModalMessage";
import toast from "react-hot-toast";

const AdminPrograms = ({ programs }) => {
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

    return (
        <AdminDashboardLayout>
            <div className=" mt-6">
                <h1 className="text-2xl font-bold mb-4">Programs</h1>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Program
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date of Creation
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Start date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    End date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Responsible
                                </th>
                                <th scope="col" className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {programs.map((program) => (
                                <tr
                                    key={program.id}
                                    className="bg-white border-b"
                                >
                                    <td className="px-6 py-4 font-medium whitespace-nowrap ">
                                        {program.title}
                                    </td>
                                    <td className="px-6 py-4">
                                        {formatDateTime(program.created_at)}
                                    </td>
                                    <td className="px-6 py-4">
                                        {program.startDate}
                                    </td>
                                    <td className="px-6 py-4">
                                        {program.endDate}
                                    </td>
                                    <td className="px-6 py-4">
                                        {program.responsible}
                                    </td>
                                    <td>
                                        <ActionsDropdown
                                            handleEditModal={() =>
                                                handleEditProgram(program)
                                            }
                                            handleDeleteModal={() =>
                                                handleDeleteModal(program)
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
                        Add new Program
                    </button>
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
                            onClose={() => setOpenDeleteModal(!openDeleteModal)}
                        >
                            <ModalMessage
                                header={"Delete Program"}
                                message={
                                    "Are you sure you want to Delete this program?"
                                }
                                onClose={() => {
                                    setOpenDeleteModal(!openDeleteModal);
                                }}
                                onConfirm={handleDeleteProgram}
                            />
                        </Modal>
                    )}
                </div>
            </div>
        </AdminDashboardLayout>
    );
};

export default AdminPrograms;
