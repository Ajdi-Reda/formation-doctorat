import React from "react";
import { useForm, usePage } from "@inertiajs/react";
import Input from "../../Components/Input";
import InputLabel from "../../Components/InputLabel";
import InputError from "../../Components/InputError";

const PersonalDataForm = ({ children, handleIncrementStep, formData }) => {
    const { errors } = usePage().props;
    const { data, setData, post } = useForm({
        formName: "personal_details_form",
        user_id: "",
        firstName: "",
        lastName: "",
        phone_number: "",
        cin: "",
        dateOfBirth: "",
        countryOfBirth: "",
        cityOfBirth: "",
        nationality: "",
        address: "",
        postalCode: "",
        country: "",
        city: "",
        remember: false,
        ...formData.personalData,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post("/form2", {
            onSuccess: () => handleIncrementStep(),
        });
    }

    return (
        <form onSubmit={handleSubmit} id="PersonalDetailsForm">
            <div className="py-6 mt-12 space-y-4">
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 mx-auto md:gap-4">
                    <div className="w-full space-y-3">
                        <div className="flex flex-col gap-2 md:flex-row ">
                            <div className="flex flex-col gap-2 md:w-full">
                                <InputLabel htmlFor="firstName">
                                    First name
                                </InputLabel>
                                <Input
                                    id="firstName"
                                    type="text"
                                    placeholder="Enter your first name"
                                    value={data["firstName"]}
                                    onChange={(e) =>
                                        setData("firstName", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors && errors["firstName"]}
                                />
                            </div>
                            <div className="flex flex-col gap-2 md:w-full">
                                <InputLabel htmlFor="lastName">
                                    Last name
                                </InputLabel>
                                <Input
                                    id="lastName"
                                    type="text"
                                    placeholder="Enter your last name"
                                    value={data["lastName"]}
                                    onChange={(e) =>
                                        setData("lastName", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors && errors["lastName"]}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="phone_number">
                                Telephone number
                            </InputLabel>
                            <Input
                                id="phone_number"
                                type="number"
                                placeholder="Enter your telephone number"
                                value={data["phone_number"]}
                                onChange={(e) =>
                                    setData("phone_number", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors && errors["phone_number"]}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="cin">CIN</InputLabel>
                            <Input
                                id="cin"
                                type="text"
                                placeholder="Enter your CIN"
                                value={data["cin"]}
                                onChange={(e) => setData("cin", e.target.value)}
                                required
                            />
                            <InputError message={errors && errors["cin"]} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="dateOfBirth">
                                Date of birth
                            </InputLabel>
                            <Input
                                id="dateOfBirth"
                                type="date"
                                placeholder="Select your date of birth"
                                value={data["dateOfBirth"]}
                                onChange={(e) =>
                                    setData("dateOfBirth", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors && errors["dateOfBirth"]}
                            />
                        </div>
                    </div>
                    <div className="w-full space-y-3">
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="countryOfBirth">
                                Country of birth
                            </InputLabel>
                            <Input
                                id="countryOfBirth"
                                type="text"
                                placeholder="Enter your country of birth"
                                value={data["countryOfBirth"]}
                                onChange={(e) =>
                                    setData("countryOfBirth", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors && errors["countryOfBirth"]}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="cityOfBirth">
                                City of birth
                            </InputLabel>
                            <Input
                                id="cityOfBirth"
                                type="text"
                                placeholder="Enter your city of birth"
                                value={data["cityOfBirth"]}
                                onChange={(e) =>
                                    setData("cityOfBirth", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors && errors["cityOfBirth"]}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="nationality">
                                Nationality
                            </InputLabel>
                            <Input
                                id="nationality"
                                type="text"
                                placeholder="Enter your nationality"
                                value={data["nationality"]}
                                onChange={(e) =>
                                    setData("nationality", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors && errors["nationality"]}
                            />
                        </div>
                    </div>
                </div>
                <h1 className="text-xl tracking-wide mt-4">Address Details</h1>
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 mx-auto md:gap-4">
                    <div className="w-full space-y-3">
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="address">Address</InputLabel>
                            <Input
                                id="address"
                                type="text"
                                placeholder="Enter your address"
                                value={data["address"]}
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                                required
                            />
                            <InputError message={errors && errors["address"]} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="postalCode">
                                Postal Code
                            </InputLabel>
                            <Input
                                id="postalCode"
                                type="number"
                                placeholder="Enter your postal code"
                                value={data["postalCode"]}
                                onChange={(e) =>
                                    setData("postalCode", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors && errors["postalCode"]}
                            />
                        </div>
                    </div>
                    <div className="w-full space-y-3">
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="country">Country</InputLabel>
                            <Input
                                id="country"
                                type="text"
                                placeholder="Enter your country"
                                value={data["country"]}
                                onChange={(e) =>
                                    setData("country", e.target.value)
                                }
                                required
                            />
                            <InputError message={errors && errors["country"]} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="city">City</InputLabel>
                            <Input
                                id="city"
                                type="text"
                                placeholder="Enter your city"
                                value={data["city"]}
                                onChange={(e) =>
                                    setData("city", e.target.value)
                                }
                                required
                            />
                            <InputError message={errors && errors["city"]} />
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </form>
    );
};

export default PersonalDataForm;
