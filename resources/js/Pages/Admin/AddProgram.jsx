import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import { toast } from "react-hot-toast";
import InputLabel from "@/Components/InputLabel.jsx";
import FileInput from "@/Components/FileInput.jsx";

const AddProgram = ({ onClose, program }) => {
    const { data, setData, post, errors, processing, reset } = useForm({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        responsable: "",
        status: "",
        icon: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(program);
        // if (program) {
        //     post("/admin/programs/{id}", {
        //         onSuccess: () => {
        //             reset();
        //             onClose();
        //             toast.success("Thesis added successfully");
        //         },
        //     });
        //     return;
        // }
        // post("/admin/programs", {
        //     onSuccess: () => {
        //         reset();
        //         onClose();
        //         toast.success("Thesis added successfully");
        //     },
        // });
    };

    return (
        <div>
            <h2 className="text-lg font-bold my-4">Add Thesis</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <InputLabel htmlFor="title">Title</InputLabel>
                    <input
                        type="text"
                        id="title"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        required
                    />
                    {errors.title && (
                        <p className="text-red-500 text-sm">{errors.title}</p>
                    )}
                </div>
                <div className="mb-4">
                    <InputLabel htmlFor="description">Description</InputLabel>
                    <textarea
                        id="description"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        rows="3"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        required
                    ></textarea>
                    {errors.description && (
                        <p className="text-red-500 text-sm">
                            {errors.description}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <InputLabel htmlFor="startDate">Start Date</InputLabel>
                    <input
                        type="date"
                        id="startDate"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={data.startDate}
                        onChange={(e) => setData("startDate", e.target.value)}
                        required
                    />
                    {errors.startDate && (
                        <p className="text-red-500 text-sm">
                            {errors.startDate}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <InputLabel htmlFor="endDate">End Date</InputLabel>
                    <input
                        type="date"
                        id="endDate"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={data.endDate}
                        onChange={(e) => setData("endDate", e.target.value)}
                        required
                    />
                    {errors.endDate && (
                        <p className="text-red-500 text-sm">{errors.endDate}</p>
                    )}
                </div>
                <div className="mb-4">
                    <InputLabel htmlFor="responsable">Responsable</InputLabel>
                    <input
                        type="text"
                        id="responsable"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={data.responsable}
                        onChange={(e) => setData("responsable", e.target.value)}
                        required
                    />
                    {errors.responsable && (
                        <p className="text-red-500 text-sm">
                            {errors.responsable}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <InputLabel htmlFor="status">Status</InputLabel>
                    <select
                        id="status"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={data.status}
                        onChange={(e) => setData("status", e.target.value)}
                        required
                    >
                        <option value="">Select Status</option>
                        <option value="ongoing">Ongoing</option>
                        <option value="completed">Completed</option>
                        <option value="upcoming">Upcoming</option>
                    </select>
                    {errors.status && (
                        <p className="text-red-500 text-sm">{errors.status}</p>
                    )}
                </div>
                <div className="flex flex-col mb-4">
                    <InputLabel htmlFor="icon">Icon</InputLabel>
                    <FileInput
                        type="file"
                        id="icon"
                        name="icon"
                        setData={setData}
                        errors={errors.icon}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                >
                    {`${processing ? "Creating ..." : "Add Program"}`}
                </button>
            </form>
        </div>
    );
};

export default AddProgram;
