import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import MD5 from "crypto-js/md5";

const AddProfessor = ({ onClose }) => {
    const { data, setData, post, errors, processing, reset } = useForm({
        email: "",
        invitation_token: "",
    });

    const [invitationToken, setInvitationToken] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        post("/admin/professors/invitations", {
            onSuccess: () => {
                reset();
                onClose();
                toast.success("Invitation sent successfully");
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
        setInvitationToken(hash);
    };

    return (
        <div>
            <h2 className="text-lg font-bold ">Add Professor</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <InputLabel htmlFor="email">Email</InputLabel>
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
                            Invitation token
                        </InputLabel>
                        <Input
                            type="text"
                            id="invitation_token"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            value={invitationToken}
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
                        Generate Invitation token
                    </PrimaryButton>
                </div>
                <PrimaryButton
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                >
                    {processing ? "Processing..." : "Send"}
                </PrimaryButton>
            </form>
        </div>
    );
};

export default AddProfessor;
