import React, { useEffect, useState } from "react";
import { useForm } from "@inertiajs/react";
import { toast } from "react-hot-toast";
import InputLabel from "@/Components/InputLabel.jsx";
import FileInput from "@/Components/FileInput.jsx";
import PrimaryButton from "@/Components/PrimaryButton";

const AddEditThesis = ({ onClose, programFields, thesis }) => {
    console.log(thesis);
    const [selectedProgram, setSelectedProgram] = useState(
        thesis ? thesis.program.title : ""
    );
    const [selectedField, setSelectedField] = useState(
        thesis ? thesis.field.name : ""
    );
    const [fields, setFields] = useState([]);

    const initialFormData = thesis
        ? {
              fieldId: thesis.field.id,
              title: thesis.title,
              description: thesis.description,
              thesisOutline: "",
          }
        : {
              fieldId: "",
              title: "",
              description: "",
              thesisOutline: "",
          };

    const { data, setData, post, put, errors, processing, reset } =
        useForm(initialFormData);

    useEffect(() => {
        if (selectedProgram) {
            const selectedProgramFields = programFields.find(
                (program) => program.title === selectedProgram
            );
            setFields(
                selectedProgramFields ? selectedProgramFields.fields : []
            );
        }
    }, [selectedProgram, programFields]);

    const handleProgramChange = (e) => {
        const selectedProgramValue = e.target.value;
        setSelectedProgram(selectedProgramValue);
    };

    const handleFieldChange = (e) => {
        const selectedFieldValue = e.target.value;
        setSelectedField(selectedFieldValue);
        const selectedField = fields.find(
            (field) => field.name === selectedFieldValue
        );
        setData("fieldId", selectedField ? selectedField.id : "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (thesis) {
            put(`/professor/theses/${thesis.id}`, {
                onSuccess: () => {
                    reset();
                    onClose();
                    toast.success("Thesis updated successfully");
                },
            });
        } else {
            post("/professor/theses", {
                onSuccess: () => {
                    reset();
                    onClose();
                    toast.success("Thesis added successfully");
                },
            });
        }
    };

    return (
        <div>
            <h2 className="text-lg font-bold mb-4">
                {thesis ? "Edit Thesis" : "Add Thesis"}
            </h2>
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
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={selectedProgram}
                        onChange={handleProgramChange}
                        required
                    >
                        <option value="">Select Program</option>
                        {programFields.map((program, index) => (
                            <option key={index} value={program.title}>
                                {program.title}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="field"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Field
                    </label>
                    <select
                        id="field"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={selectedField}
                        onChange={handleFieldChange}
                        required
                    >
                        <option value="">Select Field</option>
                        {fields.map((field, index) => (
                            <option key={index} value={field.name}>
                                {field.name}
                            </option>
                        ))}
                    </select>
                </div>
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
                        value={data.title}
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
                    {processing
                        ? thesis
                            ? "Editing ..."
                            : "Creating ..."
                        : thesis
                        ? "Edit Thesis"
                        : "Add Thesis"}
                </PrimaryButton>
            </form>
        </div>
    );
};

export default AddEditThesis;
