import React, {useEffect, useState} from 'react';
import { useForm } from "@inertiajs/react";
import {toast} from "react-hot-toast";
import InputLabel from "@/Components/InputLabel.jsx";
import FileInput from "@/Components/FileInput.jsx";

const AddThesis = ({onClose, programFields }) => {
    const [selectedProgram, setSelectedProgram] = useState('');
    const [selectedField, setSelectedField] = useState('');
    const [fields, setFields] = useState('');

    const { data, setData, post, errors, processing, reset } = useForm({
        fieldId: '',
        title: '',
        description: '',
        thesisOutline: '',
    });

    const handleProgramChange = (e) => {
        const selectedProgramValue = e.target.value;
        setSelectedProgram(selectedProgramValue);
        const selectedProgramFields = programFields.find(program => program.title === selectedProgramValue);
        setFields(selectedProgramFields ? selectedProgramFields.fields : '');
    };
    const handleFieldChange = (e) => {
        const selectedFieldValue = e.target.value;
        setSelectedField(selectedFieldValue);
        const selectedFieldId = fields.find(field => field.name === selectedFieldValue);
        setData('fieldId', selectedFieldId.id)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(processing);
        post('/professor/theses', {
            onSuccess: () => {
                reset()
                onClose();
                toast.success("Thesis added successfully")
            },
        });
    };

    return (
        <div>
            <h2 className="text-lg font-bold mb-4">Add Thesis</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="program" className="block text-sm font-medium text-gray-700">Program</label>
                    <select
                        id="program"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={selectedProgram}
                        onChange={handleProgramChange}
                        required
                    >
                        <option value="">Select Program</option>
                        {programFields.map((program, index) => (
                            <option key={index} value={program.title}>{program.title}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="program" className="block text-sm font-medium text-gray-700">Field</label>
                    <select
                        id="program"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={selectedField}
                        onChange={handleFieldChange}
                        required
                    >
                        <option value="">Select field</option>
                        {fields && fields.map((field, index) => (
                            <option onChange={() => console.log(index)} key={index} value={field.name}>{field.name}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        id="title"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        required
                    />
                    {errors.title && (
                        <p className="text-red-500 text-sm">{errors.title}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        id="description"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        rows="3"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        required
                    ></textarea>
                    {errors.description && (
                        <p className="text-red-500 text-sm">{errors.description}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                >
                    {`${processing? 'Creating ...' : 'Add thesis'}`}
                </button>
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

            </form>
        </div>
    );
};

export default AddThesis;
