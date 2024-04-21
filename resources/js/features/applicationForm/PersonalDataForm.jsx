import React from "react";
import { useForm, usePage } from "@inertiajs/react";
import Input from "../../Components/Input";
import InputLabel from "../../Components/InputLabel";
import InputError from "../../Components/InputError";
import { useTranslation } from "react-i18next";

const PersonalDataForm = ({ children, handleIncrementStep, formData }) => {
    const { t } = useTranslation("form");
    const { data, setData, post, errors } = useForm({
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
                                    {t("personalDetails.labels.firstName")}
                                </InputLabel>
                                <Input
                                    id="firstName"
                                    type="text"
                                    placeholder={t(
                                        "personalDetails.placeholders.firstName"
                                    )}
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
                                    {t("personalDetails.labels.lastName")}
                                </InputLabel>
                                <Input
                                    id="lastName"
                                    type="text"
                                    placeholder={t(
                                        "personalDetails.placeholders.lastName"
                                    )}
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
                                {t("personalDetails.labels.phone_number")}
                            </InputLabel>
                            <Input
                                id="phone_number"
                                type="number"
                                placeholder={t(
                                    "personalDetails.placeholders.phone_number"
                                )}
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
                            <InputLabel htmlFor="cin">
                                {t("personalDetails.labels.cin")}
                            </InputLabel>
                            <Input
                                id="cin"
                                type="text"
                                placeholder={t(
                                    "personalDetails.placeholders.cin"
                                )}
                                value={data["cin"]}
                                onChange={(e) => setData("cin", e.target.value)}
                                required
                            />
                            <InputError message={errors && errors["cin"]} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="dateOfBirth">
                                {t("personalDetails.labels.dateOfBirth")}
                            </InputLabel>
                            <Input
                                id="dateOfBirth"
                                type="date"
                                placeholder={t(
                                    "personalDetails.placeholders.dateOfBirth"
                                )}
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
                                {t("personalDetails.labels.countryOfBirth")}
                            </InputLabel>
                            <Input
                                id="countryOfBirth"
                                type="text"
                                placeholder={t(
                                    "personalDetails.placeholders.countryOfBirth"
                                )}
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
                                {t("personalDetails.labels.cityOfBirth")}
                            </InputLabel>
                            <Input
                                id="cityOfBirth"
                                type="text"
                                placeholder={t(
                                    "personalDetails.placeholders.cityOfBirth"
                                )}
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
                                {t("personalDetails.labels.nationality")}
                            </InputLabel>
                            <Input
                                id="nationality"
                                type="text"
                                placeholder={t(
                                    "personalDetails.placeholders.nationality"
                                )}
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
                            <InputLabel htmlFor="address">
                                {t("personalDetails.labels.address")}
                            </InputLabel>
                            <Input
                                id="address"
                                type="text"
                                placeholder={t(
                                    "personalDetails.placeholders.address"
                                )}
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
                                {t("personalDetails.labels.postalCode")}
                            </InputLabel>
                            <Input
                                id="postalCode"
                                type="number"
                                placeholder={t(
                                    "personalDetails.placeholders.postalCode"
                                )}
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
                            <InputLabel htmlFor="country">
                                {t("personalDetails.labels.country")}
                            </InputLabel>
                            <Input
                                id="country"
                                type="text"
                                placeholder={t(
                                    "personalDetails.placeholders.country"
                                )}
                                value={data["country"]}
                                onChange={(e) =>
                                    setData("country", e.target.value)
                                }
                                required
                            />
                            <InputError message={errors && errors["country"]} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="city">
                                {t("personalDetails.labels.city")}
                            </InputLabel>
                            <Input
                                id="city"
                                type="text"
                                placeholder={t(
                                    "personalDetails.placeholders.city"
                                )}
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
