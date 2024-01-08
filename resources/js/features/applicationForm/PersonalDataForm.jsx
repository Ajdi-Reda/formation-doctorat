import React from "react";
import { useForm } from "@inertiajs/react";

const PersonalDataForm = ({ children, handleIncrementStep }) => {
    const { data, setData, post, errors } = useForm({
        firstName: "",
        lastName: "",
        email: "",
        telephoneNumber: "",
        cin: "",
        birthDay: "",
        countryOfBirth: "",
        cityOfBirth: "",
        nationality: "",
        address: "",
        postalCode: "",
        country: "",
        city: "",
        remember: true,
    });

    function handleSubmit(e) {
        e.preventDefault();
        handleIncrementStep();
        post("/form1");
    }
    return (
        <form onSubmit={handleSubmit} id="form1">
            <div className="py-6 mt-12 space-y-4">
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:justify-center md:items-center md:gap-8">
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
                                    <p className="text-red-500 text-s"></p>
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
                                    <p className="text-red-500 text-s"></p>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">Email</label>
                            <input
                                required
                                type="email"
                                id="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            {errors.email && (
                                <p className="text-red-500 text-s"></p>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="telephoneNumber">
                                Telephone number
                            </label>
                            <input
                                required
                                type="number"
                                id="telephoneNumber"
                                value={data.telephoneNumber}
                                onChange={(e) =>
                                    setData("telephoneNumber", e.target.value)
                                }
                            />
                            {errors.telephoneNumber && (
                                <p className="text-red-500 text-s"></p>
                            )}
                        </div>
                        <div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="cin">CIN</label>
                                <input
                                    required
                                    type="text"
                                    id="cin"
                                    value={data.cni}
                                    onChange={(e) =>
                                        setData("cni", e.target.value)
                                    }
                                />
                                {errors.cin && (
                                    <p className="text-red-500 text-s"></p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="md:w-full space-y-1 md:space-y-2">
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
                                <p className="text-red-500 text-s"></p>
                            )}
                        </div>
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
                                <p className="text-red-500 text-s"></p>
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
                                <p className="text-red-500 text-s"></p>
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
                                <p className="text-red-500 text-s"></p>
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
                            <label htmlFor="telephoneNumber">Adress</label>
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
                                <p className="text-red-500 text-s"></p>
                            )}
                        </div>
                        <div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="cin">Country</label>
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
                                    <p className="text-red-500 text-s"></p>
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
                                <p className="text-red-500 text-s"></p>
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
                                <p className="text-red-500 text-s"></p>
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
