import React from "react";
import { useForm } from "@inertiajs/react";
import { toast } from "react-hot-toast";
import InputLabel from "@/Components/InputLabel.jsx";
import FileInput from "@/Components/FileInput.jsx";
import PrimaryButton from "@/Components/PrimaryButton";

const EditThesis = ({ onClose, thesis }) => {
    const { data, setData, post, errors, processing, reset } = useForm({
        title: thesis.title,
        description: thesis.description,
        thesisOutline: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/professor/theses/${thesis.id}`, {
            onSuccess: () => {
                reset();
                onClose();
                toast.success("Thesis updated successfully");
            },
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                >
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    value={data.title} // Use data.title instead of thesis.title
                    onChange={(e) => setData("title", e.target.value)}
                    required
                />
                {errors.title && (
                    <p className="text-red-500 text-sm">{errors.title}</p>
                )}
            </div>
            <div className="mb-4">
                <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                >
                    Description
                </label>
                <textarea
                    id="description"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    rows="3"
                    value={data.description} // Use data.description instead of thesis.description
                    onChange={(e) => setData("description", e.target.value)}
                    required
                ></textarea>
                {errors.description && (
                    <p className="text-red-500 text-sm">{errors.description}</p>
                )}
            </div>
            <div className="flex flex-col mt-2">
                <InputLabel htmlFor="thesisOutline">Attach file</InputLabel>
                <FileInput
                    type="file"
                    id="thesisOutline"
                    name="thesisOutline"
                    accept="application/pdf"
                    setData={setData}
                    errors={errors.thesisOutline}
                />
            </div>
            <PrimaryButton
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
            >
                {`${processing ? "Editing ..." : "Edit thesis"}`}
            </PrimaryButton>
        </form>
    );
};

export default EditThesis;
