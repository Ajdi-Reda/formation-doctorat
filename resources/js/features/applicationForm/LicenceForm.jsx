import React, { useEffect } from "react";
import Input from "@/Components/Input.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import InputError from "@/Components/InputError.jsx";
import FileInput from "@/Components/FileInput.jsx";
import { useTranslation } from "react-i18next";
import SelectMenu from "@/Components/SelectMenu";

const LicenceForm = ({ data, errors, setData, completed }) => {
    const { t } = useTranslation("form");

    useEffect(() => {
        if (!data.lType) {
            setData("lType", "licence");
        }
    }, [setData, data.lType]);

    const licenceTypeOptions = [
        t("licenceForm.licenceTypes.licence"),
        t("licenceForm.licenceTypes.licenceProfessionel"),
    ];

    return (
        <div>
            <div className="py-6 mt-12 space-y-4">
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 mx-auto md:gap-4">
                    <div className="w-full space-y-3">
                        <div className="flex flex-col gap-2 md:w-full">
                            <InputLabel htmlFor="lType">
                                {t("licenceForm.labels.lType")}
                            </InputLabel>
                            <SelectMenu
                                id="lType"
                                name="lType"
                                options={licenceTypeOptions}
                                defaultValue={data.lType}
                                onChange={(e) =>
                                    setData("lType", e.target.value)
                                }
                            />
                            <InputError message={errors && errors.lType} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="lYear">
                                {t("licenceForm.labels.lYear")}
                            </InputLabel>
                            <Input
                                id="lYear"
                                type="number"
                                placeholder={t(
                                    "licenceForm.placeholders.lYear"
                                )}
                                value={data.lYear}
                                onChange={(e) =>
                                    setData("lYear", e.target.value)
                                }
                                required
                            />
                            <InputError message={errors && errors.lYear} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="lEstablishment">
                                {t("licenceForm.labels.lEstablishment")}
                            </InputLabel>
                            <Input
                                id="lEstablishment"
                                type="text"
                                pattern="[a-zA-Z]*"
                                placeholder={t(
                                    "licenceForm.placeholders.lEstablishment"
                                )}
                                value={data.lEstablishment}
                                onChange={(e) =>
                                    setData("lEstablishment", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors && errors.lEstablishment}
                            />
                        </div>
                        <div className="flex flex-col gap-2 md:w-full">
                            <InputLabel htmlFor="lBranch">
                                {t("licenceForm.labels.lBranch")}
                            </InputLabel>
                            <Input
                                id="lBranch"
                                type="text"
                                pattern="[a-zA-Z]*"
                                placeholder={t(
                                    "licenceForm.placeholders.lBranch"
                                )}
                                value={data.lBranch}
                                onChange={(e) =>
                                    setData("lBranch", e.target.value)
                                }
                                required
                            />
                            <InputError message={errors && errors.lBranch} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="semester1">
                                {t("licenceForm.labels.semester1")}
                            </InputLabel>
                            <Input
                                id="semester1"
                                type="number"
                                placeholder={t(
                                    "licenceForm.placeholders.semester1"
                                )}
                                value={data.semester1}
                                onChange={(e) =>
                                    setData("semester1", e.target.value)
                                }
                                required
                            />
                            <InputError message={errors && errors.semester1} />
                        </div>
                    </div>
                    <div className="w-full space-y-3">
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="semester2">
                                {t("licenceForm.labels.semester2")}
                            </InputLabel>
                            <Input
                                id="semester2"
                                type="number"
                                placeholder={t(
                                    "licenceForm.placeholders.semester2"
                                )}
                                value={data.semester2}
                                onChange={(e) =>
                                    setData("semester2", e.target.value)
                                }
                                required
                            />
                            <InputError message={errors && errors.semester2} />
                        </div>
                        <div className="w-full space-y-3">
                            <div className="flex flex-col gap-2">
                                <InputLabel htmlFor="semester3">
                                    {t("licenceForm.labels.semester3")}
                                </InputLabel>
                                <Input
                                    id="semester3"
                                    type="number"
                                    placeholder={t(
                                        "licenceForm.placeholders.semester3"
                                    )}
                                    value={data.semester3}
                                    onChange={(e) =>
                                        setData("semester3", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors && errors.semester3}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <InputLabel htmlFor="semester4">
                                    {t("licenceForm.labels.semester4")}
                                </InputLabel>
                                <Input
                                    id="semester4"
                                    type="number"
                                    placeholder={t(
                                        "licenceForm.placeholders.semester4"
                                    )}
                                    value={data.semester4}
                                    onChange={(e) =>
                                        setData("semester4", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors && errors.semester4}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <InputLabel htmlFor="semester5">
                                    {t("licenceForm.labels.semester5")}
                                </InputLabel>
                                <Input
                                    id="semester5"
                                    type="number"
                                    placeholder={t(
                                        "licenceForm.placeholders.semester5"
                                    )}
                                    value={data.semester5}
                                    onChange={(e) =>
                                        setData("semester5", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors && errors.semester5}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <InputLabel htmlFor="semester6">
                                    {t("licenceForm.labels.semester6")}
                                </InputLabel>
                                <Input
                                    id="semester6"
                                    type="number"
                                    placeholder={t(
                                        "licenceForm.placeholders.semester6"
                                    )}
                                    value={data.semester6}
                                    onChange={(e) =>
                                        setData("semester6", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors && errors.semester6}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <InputLabel htmlFor="licenceDiploma">
                    {t("licenceForm.labels.licenceDiploma")}
                </InputLabel>
                <FileInput
                    required={!completed}
                    type="file"
                    id="licenceDiploma"
                    name="licenceDiploma"
                    setData={setData}
                    errors={errors.licenceDiploma}
                />
            </div>
        </div>
    );
};

export default LicenceForm;
