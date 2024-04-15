import React from "react";
import {useForm} from "@inertiajs/react";
import {toast} from "react-hot-toast";

const EditProgram = ({onClose, program}) => {
    const { data, setData, patch, processing } = useForm({
        id: program.id,
        title: '',
        description: '',
    });

    const handleSubmit = () => {
        patch('/professor/theses', {
            onSuccess: () => {
                onClose()
                toast.success("Thesis updated successfully")
            },
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input
                    type="text"
                    id="title"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    value={thesis.title}
                    onChange={(e) => setData('title', e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                    id="description"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    rows="3"
                    value={thesis.description}
                    onChange={(e) => setData('description', e.target.value)}
                    required
                ></textarea>
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
            >
                {`${processing ? 'Editing ...' : 'Edit thesis'}`}
            </button>
        </form>
    )
}

export default EditProgram
