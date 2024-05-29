import React from "react";
import { useForm } from "@inertiajs/react";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import InputLabel from "@/Components/InputLabel.jsx";
import PrimaryButton from "@/Components/PrimaryButton";

const AddEditUniversity = ({ onClose, university, programs }) => {
    const { t } = useTranslation("admin");

    const initialFormData = university
        ? {
              name: university.name,
              address: university.address,
              chancellor: university.chancellor,
              chancellorEmail: university.chancellorEmail,
              chancellorPhoneNumber: university.chancellorPhoneNumber,
              selectedPrograms: university.programs.map((p) => p.id) || [],
          }
        : {
              name: "",
              address: "",
              chancellor: "",
              chancellorEmail: "",
              chancellorPhoneNumber: "",
              selectedPrograms: [],
          };

    const { data, setData, post, patch, errors, processing, reset } =
        useForm(initialFormData);

    const handleProgramChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, (option) =>
            parseInt(option.value)
        );

        setData("selectedPrograms", selectedOptions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const programIds = data.selectedPrograms;
        const formData = {
            ...data,
            selectedPrograms: programIds,
        };

        if (university) {
            const { id } = university;
            patch(`/admin/universities/${id}`, {
                data: formData,
                onSuccess: () => {
                    reset();
                    onClose();
                    toast.success(t("addUniversity.submitEditSuccess"));
                },
            });
        } else {
            post("/admin/universities", {
                data: formData,
                onSuccess: () => {
                    reset();
                    onClose();
                    toast.success(t("addUniversity.submitAddSuccess"));
                },
            });
        }
    };

    return (
        <div>
            <h2 className="text-lg font-bold my-4">
                {university
                    ? t("addUniversity.titleEdit")
                    : t("addUniversity.titleAdd")}
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <InputLabel htmlFor="name">
                        {t("addUniversity.name")}
                    </InputLabel>
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
                    <InputLabel htmlFor="address">
                        {t("addUniversity.address")}
                    </InputLabel>
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
                    <InputLabel htmlFor="program">
                        {t("addUniversity.programs")}
                    </InputLabel>
                    <select
                        id="program"
                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={data.selectedPrograms}
                        onChange={handleProgramChange}
                        required
                        multiple
                    >
                        <option value="" disabled>
                            {t("addUniversity.selectPrograms")}
                        </option>
                        {programs.map((program) => (
                            <option key={program.id} value={program.id}>
                                {program.title}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <InputLabel htmlFor="chancellor">
                        {t("addUniversity.chancellor")}
                    </InputLabel>
                    <input
                        type="text"
                        id="chancellor"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={data.chancellor}
                        onChange={(e) => setData("chancellor", e.target.value)}
                        required
                    />
                    {errors.chancellor && (
                        <p className="text-red-500 text-sm">
                            {errors.chancellor}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <InputLabel htmlFor="chancellorEmail">
                        {t("addUniversity.chancellorEmail")}
                    </InputLabel>
                    <input
                        type="email"
                        id="chancellorEmail"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={data.chancellorEmail}
                        onChange={(e) =>
                            setData("chancellorEmail", e.target.value)
                        }
                        required
                    />
                    {errors.chancellorEmail && (
                        <p className="text-red-500 text-sm">
                            {errors.chancellorEmail}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <InputLabel htmlFor="chancellorPhoneNumber">
                        {t("addUniversity.chancellorPhoneNumber")}
                    </InputLabel>
                    <input
                        type="text"
                        id="chancellorPhoneNumber"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={data.chancellorPhoneNumber}
                        onChange={(e) =>
                            setData("chancellorPhoneNumber", e.target.value)
                        }
                        required
                    />
                    {errors.chancellorPhoneNumber && (
                        <p className="text-red-500 text-sm">
                            {errors.chancellorPhoneNumber}
                        </p>
                    )}
                </div>
                <PrimaryButton
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                >
                    {processing
                        ? university
                            ? t("addUniversity.processingEdit")
                            : t("addUniversity.processingAdd")
                        : university
                        ? t("addUniversity.submitEdit")
                        : t("addUniversity.submitAdd")}
                </PrimaryButton>
            </form>
        </div>
    );
};

export default AddEditUniversity;
