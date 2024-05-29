import React, { useState, useEffect } from "react";
import { router, useForm } from "@inertiajs/react";
import { toast } from "react-hot-toast";
import PrimaryButton from "@/Components/PrimaryButton";
import { useTranslation } from "react-i18next";

const AddEditField = ({ onClose, universities = [], field = null }) => {
    const { t } = useTranslation("admin");

    const findProgramAndUniversity = () => {
        if (!field) return { selectedUniversity: null, selectedProgram: null };

        for (const university of universities) {
            for (const program of university.programs) {
                if (program.fields.some((f) => f.id === field.id)) {
                    return {
                        selectedUniversity: university.id,
                        selectedProgram: program.id,
                    };
                }
            }
        }
        return { selectedUniversity: null, selectedProgram: null };
    };

    const {
        selectedUniversity: initialUniversity,
        selectedProgram: initialProgram,
    } = findProgramAndUniversity();

    const [selectedUniversity, setSelectedUniversity] =
        useState(initialUniversity);
    const [selectedProgram, setSelectedProgram] = useState(initialProgram);
    const [filteredPrograms, setFilteredPrograms] = useState([]);

    const { data, setData, post, patch, errors, processing, reset } = useForm({
        programId: initialProgram || "",
        name: field ? field.name : "",
        description: field ? field.description : "",
        universityId: initialUniversity || "",
    });

    useEffect(() => {
        if (field) {
            setSelectedProgram(initialProgram);
            setSelectedUniversity(initialUniversity);
            if (initialUniversity) {
                const university = universities.find(
                    (uni) => uni.id === initialUniversity
                );
                if (university) {
                    setFilteredPrograms(university.programs);
                }
            }
        }
    }, [field, initialUniversity, initialProgram, universities]);

    const handleUniversityChange = (e) => {
        const selectedUniversityId = parseInt(e.target.value, 10);
        console.log("Selected University:", selectedUniversityId);
        setSelectedUniversity(selectedUniversityId);
        setData("universityId", selectedUniversityId);

        const university = universities.find(
            (uni) => uni.id === selectedUniversityId
        );
        if (university) {
            setFilteredPrograms(university.programs);
        } else {
            setFilteredPrograms([]);
        }
        setSelectedProgram("");
        setData("programId", "");
        console.log(data, selectedUniversity, initialUniversity);
    };

    const handleProgramChange = (e) => {
        const selectedProgramId = parseInt(e.target.value, 10);
        setSelectedProgram(selectedProgramId);
        setData("programId", selectedProgramId);
        console.log(data, selectedUniversity);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const url = field ? `admin/fields/${field.id}` : "/admin/fields";

        field
            ? router.patch(url, {
                  data: {
                      ...data,
                      universityId: field
                          ? data.universityId
                          : selectedUniversity,
                  },
                  onSuccess: () => {
                      reset();
                      onClose();
                      toast.success(t("addField.editSuccess"));
                  },
              })
            : router.post(url, {
                  data: {
                      ...data,
                      universityId: field
                          ? data.universityId
                          : selectedUniversity,
                  },
                  onSuccess: () => {
                      reset();
                      onClose();
                      toast.success(t("addField.addSuccess"));
                  },
              });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="university"
                        className="block text-sm font-medium text-gray-700"
                    >
                        {t("addField.universityLabel")}
                    </label>
                    <select
                        id="university"
                        className="block w-full mt-1 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={selectedUniversity || ""}
                        onChange={handleUniversityChange}
                        required
                    >
                        <option value="">
                            {t("addField.selectUniversity")}
                        </option>
                        {universities.map((university) => (
                            <option key={university.id} value={university.id}>
                                {university.name}
                            </option>
                        ))}
                    </select>
                </div>
                {selectedUniversity && (
                    <div className="mb-4">
                        <label
                            htmlFor="program"
                            className="block text-sm font-medium text-gray-700"
                        >
                            {t("addField.programLabel")}
                        </label>
                        <select
                            id="program"
                            className="block w-full mt-1 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={selectedProgram || ""}
                            onChange={handleProgramChange}
                            required
                        >
                            <option value="">
                                {t("addField.selectProgram")}
                            </option>
                            {filteredPrograms.map((program) => (
                                <option key={program.id} value={program.id}>
                                    {program.title}
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
                        {t("addField.nameLabel")}
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
                        {t("addField.descriptionLabel")}
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
                    {processing
                        ? t("addField.processing")
                        : field
                        ? t("addField.editField")
                        : t("addField.addField")}
                </PrimaryButton>
            </form>
        </div>
    );
};

export default AddEditField;
