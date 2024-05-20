import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { toast } from "react-hot-toast";
import PrimaryButton from "@/Components/PrimaryButton";

const AddEditField = ({ onClose, programs = [], field = null }) => {
    const [selectedProgram, setSelectedProgram] = useState("");
    const [universities, setUniversities] = useState([]);
    const [selectedUniversities, setSelectedUniversities] = useState([]);

    const { data, setData, post, patch, errors, processing, reset } = useForm({
        programId: field ? field.programId : "",
        name: field ? field.name : "",
        description: field ? field.description : "",
        universityIds: field ? field.universities.map((u) => u.id) : [],
    });

    useEffect(() => {
        if (isEditMode) {
            setSelectedProgram(field.programId);
        }
    }, [field]);

    useEffect(() => {
        if (selectedProgram) {
            const program = programs.find((p) => p.id == selectedProgram);
            if (program) {
                setUniversities(program.universities);
                setData("programId", selectedProgram);
            }
        }
    }, [selectedProgram, programs, setData]);

    const handleProgramChange = (e) => {
        const selectedProgramId = e.target.value;
        setSelectedProgram(selectedProgramId);
    };

    const handleUniChange = (e) => {
        const selectedUniversityIds = Array.from(
            e.target.selectedOptions,
            (option) => option.value
        );
        setSelectedUniversities(selectedUniversityIds);
        setData("universityIds", selectedUniversityIds);
        console.log(selectedUniversityIds);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = isEditMode ? `/admin/fields/${field.id}` : "/admin/fields";
        const method = isEditMode ? patch : post;

        method(url, {
            onSuccess: () => {
                reset();
                onClose();
                toast.success(
                    isEditMode
                        ? "Field edited successfully"
                        : "Field added successfully"
                );
            },
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="program"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Program
                    </label>
                    <select
                        id="program"
                        className="block w-full mt-1 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={selectedProgram}
                        onChange={handleProgramChange}
                        required
                    >
                        <option value="">Select Program</option>
                        {programs.map((program) => (
                            <option key={program.id} value={program.id}>
                                {program.title}
                            </option>
                        ))}
                    </select>
                </div>
                {selectedProgram && (
                    <div className="mb-4">
                        <label
                            htmlFor="university"
                            className="block text-sm font-medium text-gray-700"
                        >
                            University
                        </label>
                        <select
                            id="university"
                            className="block w-full rounded-md border-0 mt-1 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            multiple
                            value={selectedUniversities}
                            onChange={handleUniChange}
                            required
                        >
                            {universities.map((university) => (
                                <option
                                    key={university.id}
                                    value={university.id}
                                >
                                    {university.name}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
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
                <PrimaryButton
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                >
                    {`${
                        processing
                            ? "Processing ..."
                            : field
                            ? "Edit Field"
                            : "Add Field"
                    }`}
                </PrimaryButton>
            </form>
        </div>
    );
};

export default AddEditField;
