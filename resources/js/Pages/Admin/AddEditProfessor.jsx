import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import { toast } from "react-hot-toast";
import InputLabel from "@/Components/InputLabel.jsx";
import FileInput from "@/Components/FileInput.jsx";

const AddEditProfessor = ({ onClose, professor }) => {
    // Initialize form data based on professor variable
    const initialFormData = professor
        ? {
              firstName: professor.firstName,
              lastName: professor.lastName,
              phoneNumber: professor.phoneNumber,
          }
        : {
              firstName: "",
              lastName: "",
              phoneNumber: "",
          };

    const { data, setData, patch, errors, processing, reset } =
        useForm(initialFormData);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (professor) {
            const { id } = professor;
            patch(`/admin/professors/${id}`, {
                onSuccess: () => {
                    reset();
                    onClose();
                    toast.success("Professor edited successfully");
                },
            });
        } else {
            post("/admin/professors", {
                onSuccess: () => {
                    reset();
                    onClose();
                    toast.success("Professor added successfully");
                },
            });
        }
    };

    return (
        <div>
            <h2 className="text-lg font-bold my-4">Add Professor</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <InputLabel htmlFor="firstName">First Name</InputLabel>
                    <input
                        type="text"
                        id="firstName"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={data.firstName}
                        onChange={(e) => setData("firstName", e.target.value)}
                        required
                    />
                    {errors.firstName && (
                        <p className="text-red-500 text-sm">
                            {errors.firstName}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <InputLabel htmlFor="lastName">Last Name</InputLabel>
                    <input
                        type="text"
                        id="lastName"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={data.lastName}
                        onChange={(e) => setData("lastName", e.target.value)}
                        required
                    />
                    {errors.lastName && (
                        <p className="text-red-500 text-sm">
                            {errors.lastName}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
                    <input
                        type="text"
                        id="phoneNumber"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={data.phoneNumber}
                        onChange={(e) => setData("phoneNumber", e.target.value)}
                        required
                    />
                    {errors.phoneNumber && (
                        <p className="text-red-500 text-sm">
                            {errors.phoneNumber}
                        </p>
                    )}
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                >
                    {processing
                        ? professor
                            ? "Editing ..."
                            : "Creating ..."
                        : professor
                        ? "Edit Professor"
                        : "Add Professor"}
                </button>
            </form>
        </div>
    );
};

export default AddEditProfessor;
