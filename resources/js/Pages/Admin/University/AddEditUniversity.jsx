import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import { toast } from "react-hot-toast";
import InputLabel from "@/Components/InputLabel.jsx";
import PrimaryButton from "@/Components/PrimaryButton";

const AddEditUniversity = ({ onClose, university }) => {
    // Initialize form data based on university variable
    const initialFormData = university
        ? {
              name: university.name,
              address: university.address,
              Chancellor: university.Chancellor,
              ChancellorEmail: university.ChancellorEmail,
              ChancellorPhoneNumber: university.ChancellorPhoneNumber,
          }
        : {
              name: "",
              address: "",
              Chancellor: "",
              ChancellorEmail: "",
              ChancellorPhoneNumber: "",
          };

    const { data, setData, post, patch, errors, processing, reset } =
        useForm(initialFormData);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (university) {
            const { id } = university;
            patch(`/admin/universities/${id}`, {
                onSuccess: () => {
                    reset();
                    onClose();
                    toast.success("University edited successfully");
                },
            });
        } else {
            post("/admin/universities", {
                onSuccess: () => {
                    reset();
                    onClose();
                    toast.success("University added successfully");
                },
            });
        }
    };

    return (
        <div>
            <h2 className="text-lg font-bold my-4">Add University</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <input
                        type="text"
                        id="name"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                </div>
                <div className="mb-4">
                    <InputLabel htmlFor="address">Address</InputLabel>
                    <input
                        type="text"
                        id="address"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={data.address}
                        onChange={(e) => setData("address", e.target.value)}
                        required
                    />
                    {errors.address && (
                        <p className="text-red-500 text-sm">{errors.address}</p>
                    )}
                </div>
                <div className="mb-4">
                    <InputLabel htmlFor="Chancellor">Chancellor</InputLabel>
                    <input
                        type="text"
                        id="Chancellor"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={data.Chancellor}
                        onChange={(e) => setData("Chancellor", e.target.value)}
                        required
                    />
                    {errors.Chancellor && (
                        <p className="text-red-500 text-sm">
                            {errors.Chancellor}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <InputLabel htmlFor="ChancellorEmail">
                        Chancellor Email
                    </InputLabel>
                    <input
                        type="email"
                        id="ChancellorEmail"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={data.ChancellorEmail}
                        onChange={(e) =>
                            setData("ChancellorEmail", e.target.value)
                        }
                        required
                    />
                    {errors.ChancellorEmail && (
                        <p className="text-red-500 text-sm">
                            {errors.ChancellorEmail}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <InputLabel htmlFor="ChancellorPhoneNumber">
                        Chancellor Phone Number
                    </InputLabel>
                    <input
                        type="text"
                        id="ChancellorPhoneNumber"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={data.ChancellorPhoneNumber}
                        onChange={(e) =>
                            setData("ChancellorPhoneNumber", e.target.value)
                        }
                        required
                    />
                    {errors.ChancellorPhoneNumber && (
                        <p className="text-red-500 text-sm">
                            {errors.ChancellorPhoneNumber}
                        </p>
                    )}
                </div>
                <PrimaryButton
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                >
                    {processing
                        ? university
                            ? "Editing ..."
                            : "Creating ..."
                        : university
                        ? "Edit University"
                        : "Add University"}
                </PrimaryButton>
            </form>
        </div>
    );
};

export default AddEditUniversity;
