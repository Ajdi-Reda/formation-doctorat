import React from "react";
import { useForm } from "@inertiajs/react";
import { toast } from "react-hot-toast";
import InputLabel from "@/Components/InputLabel.jsx";
import PrimaryButton from "@/Components/PrimaryButton";
import FileInput from "@/Components/FileInput";
import { useTranslation } from "react-i18next";

const AddEditProgram = ({ onClose, program, universities }) => {
    const { t } = useTranslation("admin");

    const initialFormData = program
        ? {
              selectedUniversities: program.universities.map((u) => u.id),
              title: program.title,
              description: program.description,
              startDate: program.startDate,
              endDate: program.endDate,
              responsible: program.responsible,
              status: program.status,
              icon: program.icon,
          }
        : {
              selectedUniversities: [],
              title: "",
              description: "",
              startDate: "",
              endDate: "",
              responsible: "",
              status: "",
              icon: "",
          };

    const { data, setData, post, errors, processing, reset } =
        useForm(initialFormData);

    const handleUniversityChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, (option) =>
            parseInt(option.value)
        );
        setData("selectedUniversities", selectedOptions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        if (program) {
            const { id } = program;
            post(`/admin/programs/${id}`, {
                onSuccess: () => {
                    reset();
                    onClose();
                    toast.success(t("addProgram.successEdit"));
                },
            });
        } else {
            post("/admin/programs", {
                onSuccess: () => {
                    reset();
                    onClose();
                    toast.success(t("addProgram.successAdd"));
                },
            });
        }
    };

    return (
        <div>
            <h2 className="text-lg font-bold my-4">
                {t("addProgram.addProgram")}
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="universities"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        {t("addProgram.universities")}
                    </label>
                    <select
                        id="universities"
                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={data.selectedUniversities}
                        onChange={handleUniversityChange}
                        required
                        multiple
                    >
                        <option value="" disabled={true}>
                            {t("addProgram.selectUniversities")}
                        </option>
                        {universities.map((uni) => (
                            <option key={uni.id} value={uni.id}>
                                {uni.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <InputLabel htmlFor="title">
                        {t("addProgram.title")}
                    </InputLabel>
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
                    <InputLabel htmlFor="description">
                        {t("addProgram.description")}
                    </InputLabel>
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
                    <InputLabel htmlFor="startDate">
                        {t("addProgram.startDate")}
                    </InputLabel>
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
                    <InputLabel htmlFor="endDate">
                        {t("addProgram.endDate")}
                    </InputLabel>
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
                    <InputLabel htmlFor="responsable">
                        {t("addProgram.responsible")}
                    </InputLabel>
                    <input
                        type="text"
                        id="responsable"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={data.responsible}
                        onChange={(e) => setData("responsible", e.target.value)}
                        required
                    />
                    {errors.responsible && (
                        <p className="text-red-500 text-sm">
                            {errors.responsible}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <InputLabel htmlFor="status">
                        {t("addProgram.status")}
                    </InputLabel>
                    <select
                        id="status"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={data.status}
                        onChange={(e) => setData("status", e.target.value)}
                        required
                    >
                        <option value="">{t("addProgram.selectStatus")}</option>
                        <option value="active">{t("addProgram.active")}</option>
                        <option value="inactive">
                            {t("addProgram.inactive")}
                        </option>
                    </select>
                    {errors.status && (
                        <p className="text-red-500 text-sm">{errors.status}</p>
                    )}
                </div>
                <div className="flex flex-col mb-4">
                    <InputLabel htmlFor="icon">
                        {t("addProgram.icon")}
                    </InputLabel>
                    <FileInput
                        type="file"
                        id="icon"
                        name="icon"
                        setData={setData}
                        required={program ? false : true}
                    />
                    {errors.icon && (
                        <p className="text-red-500 text-sm">{errors.icon}</p>
                    )}
                </div>
                <PrimaryButton
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                >
                    {processing
                        ? program
                            ? t("addProgram.editing")
                            : t("addProgram.creating")
                        : program
                        ? t("addProgram.editButton")
                        : t("addProgram.addProgram")}
                </PrimaryButton>
            </form>
        </div>
    );
};

export default AddEditProgram;
