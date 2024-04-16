import React from "react";
import { useForm } from "@inertiajs/react";
import { toast } from "react-hot-toast";

const EditField = ({ onClose, field }) => {
    const { data, setData, patch, errors, processing, reset } = useForm({
        name: field.name,
        description: field.description,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = field.id;
        patch(`/admin/fields/${id}`, {
            onSuccess: () => {
                reset();
                onClose();
                toast.success("Field Edited successfully");
            },
        });
    };

    return (
        <div>
            <h2 className="text-lg font-bold mb-4">Edit Field</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Name
                    </label>
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
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                >
                    {`${processing ? "Editingating ..." : "Edit Field"}`}
                </button>
            </form>
        </div>
    );
};

export default EditField;
