import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import { formatDateTime } from "@/Components/utils/HelperFunctions.js";
import { useState } from "react";
import Modal from "@/Components/Modal.jsx";
import AddThesis from "@/Pages/Professor/AddThesis.jsx";
import ActionsDropdown from "@/Pages/Professor/ActionsDropdown.jsx";
import EditThesis from "@/Pages/Professor/EditThesis.jsx";
import ModalMessage from "@/Components/ModalMessage.jsx";
import { router } from "@inertiajs/react";
import { toast } from "react-hot-toast";

const Theses = ({ auth, theses, programFields }) => {
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [thesis, setThesis] = useState("");
    const onClose = () => setOpen(!open);

    const handleEditThesis = (thesis) => {
        setOpenEdit(!openEdit);
        setThesis(thesis);
    };
    const handleDeleteModal = (thesis) => {
        setOpenDeleteModal(!openDeleteModal);
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
        <Authenticated user={auth.user} role={auth.role}>
            <div className=" mt-12">
                <h1 className="text-2xl font-bold mb-4">Current Theses</h1>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Thesis Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date of Creation
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Number of Applicants
                                </th>
                                <th scope="col" className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {theses.map((thesis) => (
                                <tr
                                    key={thesis.id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {thesis.title}
                                    </td>
                                    <td className="px-6 py-4">
                                        {formatDateTime(thesis.created_at)}
                                    </td>
                                    <td className="px-6 py-4">
                                        {thesis.numberOfCandidates}
                                    </td>
                                    <td>
                                        <ActionsDropdown
                                            handleEditModal={() =>
                                                handleEditThesis(thesis)
                                            }
                                            handleDeleteModal={() =>
                                                handleDeleteModal(thesis)
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
                        Add new thesis
                    </button>
                    {open && (
                        <Modal show={open} onClose={onClose}>
                            <AddThesis
                                onClose={onClose}
                                programFields={programFields}
                            />
                        </Modal>
                    )}
                    {openEdit && (
                        <Modal show={openEdit} onClose={handleEditThesis}>
                            <EditThesis
                                onClose={handleEditThesis}
                                thesis={thesis}
                            />
                        </Modal>
                    )}
                    {openDeleteModal && (
                        <Modal
                            show={openDeleteModal}
                            onClose={() => setOpenDeleteModal(!openDeleteModal)}
                        >
                            <ModalMessage
                                header={"Delete thesis"}
                                message={
                                    "Are you sure you want to Delete this thesis?"
                                }
                                onClose={() =>
                                    setOpenDeleteModal(!openDeleteModal)
                                }
                                onConfirm={handleDeleteThesis}
                            />
                        </Modal>
                    )}
                </div>
            </div>
        </Authenticated>
    );
};

export default Theses;
