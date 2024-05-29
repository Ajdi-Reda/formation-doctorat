import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import React from "react";
import MD5 from "crypto-js/md5";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const AddProfessor = ({ onClose, universities }) => {
    const { t } = useTranslation("admin");
    const { data, setData, post, errors, processing, reset } = useForm({
        university_id: "",
        email: "",
        invitation_token: "",
    });

    const handleUniversityChange = (e) => {
        setData("university_id", e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post("/admin/professors/invitations", {
            onSuccess: () => {
                reset();
                onClose();
                toast.success(t("addProfessor.successMessage"));
            },
        });
    };

    const generateToken = (email) => {
        if (!email) {
            return;
        }
        const randomDigit = Math.floor(Math.random() * 10);
        const timestamp = Date.now();
        const hashInput = randomDigit.toString() + email + timestamp.toString();
        const hash = MD5(hashInput).toString().substring(0, 32);
        setData("invitation_token", hash);
    };

    return (
        <div>
            <h2 className="text-lg font-bold mb-3">
                {t("addProfessor.title")}
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <InputLabel
                        htmlFor="universities"
                        className="block text-sm font-medium text-gray-700"
                    >
                        {t("addProfessor.universitiesLabel")}
                    </InputLabel>
                    <select
                        id="universities"
                        className="block w-full rounded-md border-0 mt-1 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={data.selectedUniversity}
                        onChange={handleUniversityChange}
                        required
                    >
                        <option value="" disabled={true}>
                            {t("addProfessor.universitiesPlaceholder")}
                        </option>
                        {universities.map((uni) => (
                            <option key={uni.id} value={uni.id}>
                                {uni.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <InputLabel htmlFor="email">
                        {t("addProfessor.emailLabel")}
                    </InputLabel>
                    <Input
                        type="text"
                        id="email"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />
                    <InputError message={errors && errors.email} />
                </div>
                <div className="flex gap-3 items-center">
                    <div className="mb-4 flex-1">
                        <InputLabel htmlFor="invitation_token">
                            {t("addProfessor.invitationTokenLabel")}
                        </InputLabel>
                        <Input
                            type="text"
                            id="invitation_token"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            value={data.invitation_token}
                            onChange={(e) => console.log(e.target.value)}
                            readOnly
                        />
                        <InputError
                            message={errors && errors.invitation_token}
                        />
                    </div>
                    <PrimaryButton
                        type="button"
                        onClick={() => generateToken(data.email)}
                    >
                        {t("addProfessor.generateTokenButton")}
                    </PrimaryButton>
                </div>
                <PrimaryButton
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                >
                    {processing
                        ? t("addProfessor.processingButton")
                        : t("addProfessor.sendButton")}
                </PrimaryButton>
            </form>
        </div>
    );
};

export default AddProfessor;
