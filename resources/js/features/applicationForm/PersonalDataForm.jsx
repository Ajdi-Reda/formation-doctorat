import React from "react";
import { useForm, usePage } from "@inertiajs/react";

const PersonalDataForm = ({ children, handleIncrementStep, formData }) => {

    const { errors } = usePage().props
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
            onSuccess: () =>  handleIncrementStep()
        });
    }
    return (
        <form onSubmit={handleSubmit} id="PersonalDetailsForm">
            <div className="py-6 mt-12 space-y-4">
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:justify-center md:gap-8">
                    <div className="md:w-full space-y-1 md:space-y-2">
                        <div className="flex flex-col gap-1 md:flex-row">
                            <div className="flex flex-col gap-2 md:w-full">
                                <label htmlFor="firstName">First name</label>
                                <input
                                    required
                                    type="text"
                                    id="firstName"
                                    value={data.firstName}
                                    onChange={(e) =>
                                        setData("firstName", e.target.value)
                                    }
                                />
                                {errors.firstName && (
                                    <p className="text-red-500 text-s">{errors.firstName}</p>
                                )}
                            </div>
                            <div className="flex flex-col gap-2 md:w-full">
                                <label htmlFor="lastName">Last name</label>
                                <input
                                    required
                                    type="text"
                                    id="lastName"
                                    value={data.lastName}
                                    onChange={(e) =>
                                        setData("lastName", e.target.value)
                                    }
                                />
                                {errors.lastName && (
                                    <p className="text-red-500 text-s">{errors.lastName}</p>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone_number">
                                Telephone number
                            </label>
                            <input
                                required
                                type="number"
                                id="phone_number"
                                value={data.phone_number}
                                onChange={(e) =>
                                    setData("phone_number", e.target.value)
                                }
                            />
                            {errors.phone_number && (
                                <p className="text-red-500 text-s">  {errors.phone_number}</p>
                            )}
                        </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="cin">CIN</label>
                                <input
                                    required
                                    type="text"
                                    id="cin"
                                    value={data.cin}
                                    onChange={(e) =>
                                        setData("cin", e.target.value)
                                    }
                                />
                                {errors.cin && (
                                    <p className="text-red-500 text-s">{errors.cin}</p>
                                )}
                            </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="dateOfBirth">Date of birth</label>
                            <input
                                required
                                type="date"
                                id="dateOfBirth"
                                value={data.dateOfBirth}
                                onChange={(e) =>
                                    setData("dateOfBirth", e.target.value)
                                }
                            />
                            {errors.dateOfBirth && (
                                <p className="text-red-500 text-s"> {errors.dateOfBirth}</p>
                            )}
                        </div>
                    </div>
                    <div className="md:w-full space-y-1 md:space-y-2">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="countryOfBirth">
                                Country of birth
                            </label>
                            <input
                                required
                                type="text"
                                id="countryOfBirth"
                                value={data.countryOfBirth}
                                onChange={(e) =>
                                    setData("countryOfBirth", e.target.value)
                                }
                            />
                            {errors.countryOfBirth && (
                                <p className="text-red-500 text-s"> {errors.countryOfBirth}</p>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="cityOfBirth">City of birth</label>
                            <input
                                required
                                type="text"
                                id="cityOfBirth"
                                value={data.cityOfBirth}
                                onChange={(e) =>
                                    setData("cityOfBirth", e.target.value)
                                }
                            />
                            {errors.cityOfBirth && (
                                <p className="text-red-500 text-s">{errors.cityOfBirth}</p>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="nationality">Nationality</label>
                            <input
                                required
                                type="text"
                                id="nationality"
                                value={data.nationality}
                                onChange={(e) =>
                                    setData("nationality", e.target.value)
                                }
                            />
                            {errors.nationality && (
                                <p className="text-red-500 text-s"> {errors.nationality}</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="pt-8">
                    <h2 className="text-xl">Address details</h2>
                </div>
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:justify-center md:items-center md:gap-8 mt-4">
                    <div className="md:w-full space-y-1 md:space-y-2">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="address">Address</label>
                            <input
                                required
                                type="text"
                                id="address"
                                value={data.address}
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                            />
                            {errors.address && (
                                <p className="text-red-500 text-s">{errors.address}</p>
                            )}
                        </div>
                        <div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="country">Country</label>
                                <input
                                    required
                                    type="text"
                                    id="country"
                                    value={data.country}
                                    onChange={(e) =>
                                        setData("country", e.target.value)
                                    }
                                />
                                {errors.country && (
                                    <p className="text-red-500 text-s">{errors.country}</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="md:w-full space-y-1 md:space-y-2">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="postalCode">Postal Code</label>
                            <input
                                required
                                type="number"
                                id="postalCode"
                                value={data.postalCode}
                                onChange={(e) =>
                                    setData("postalCode", e.target.value)
                                }
                            />
                            {errors.postalCode && (
                                <p className="text-red-500 text-s"> {errors.postalCode}</p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="city">City</label>
                            <input
                                required
                                type="text"
                                id="city"
                                value={data.city}
                                onChange={(e) =>
                                    setData("city", e.target.value)
                                }
                            />
                            {errors.city && (
                                <p className="text-red-500 text-s">{errors.city}</p>
                            )}
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </form>
    );
};

export default PersonalDataForm;
