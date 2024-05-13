import React from "react";
import Input from "@/Components/Input";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

const RegisterForm = ({ email }) => {
    const { data, setData, post, errors } = useForm({
        email: email,
        firstName: "",
        lastName: "",
        phoneNumber: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("register-professor", {
            onSuccess: () => {},
        });
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                    <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input
                                    type="email"
                                    id="email"
                                    value={email}
                                    disabled
                                />
                            </div>
                            <div className="mb-4">
                                <InputLabel htmlFor="firstName">
                                    First Name
                                </InputLabel>
                                <Input
                                    type="text"
                                    id="firstName"
                                    value={data.firstName}
                                    onChange={(e) =>
                                        setData("firstName", e.target.value)
                                    }
                                    required
                                />
                                <InputError message={errors.firstName} />
                            </div>
                            <div className="mb-4">
                                <InputLabel htmlFor="lastName">
                                    Last Name
                                </InputLabel>
                                <Input
                                    type="text"
                                    id="lastName"
                                    value={data.lastName}
                                    onChange={(e) =>
                                        setData("lastName", e.target.value)
                                    }
                                    required
                                />
                                <InputError message={errors.lastName} />
                            </div>
                            <div className="mb-4">
                                <InputLabel htmlFor="phoneNumber">
                                    Phone Number
                                </InputLabel>
                                <Input
                                    type="text"
                                    id="phoneNumber"
                                    value={data.phoneNumber}
                                    onChange={(e) =>
                                        setData("phoneNumber", e.target.value)
                                    }
                                    required
                                />
                                <InputError message={errors.phoneNumber} />
                            </div>
                            <div className="mb-4">
                                <InputLabel htmlFor="password">
                                    Password
                                </InputLabel>
                                <Input
                                    type="password"
                                    id="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    required
                                />
                                <InputError message={errors.password} />
                            </div>
                            <PrimaryButton
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                            >
                                Register
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
