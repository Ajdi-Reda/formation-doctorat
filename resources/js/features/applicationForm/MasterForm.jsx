import React, { useEffect } from "react";
import Input from "@/Components/Input.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import InputError from "@/Components/InputError.jsx";
import FileInput from "@/Components/FileInput.jsx";
import { useTranslation } from "react-i18next";

const MasterForm = ({ data, errors, setData, completed }) => {
    const { t } = useTranslation("form");

    return (
        <div>
            <div className="py-6 mt-12 space-y-4">
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 mx-auto md:gap-4">
                    <div className="w-full space-y-3">
                        <div className="flex flex-col gap-2 md:w-full">
                            <InputLabel htmlFor="mBranch">
                                {t("masterForm.labels.branch")}
                            </InputLabel>
                            <Input
                                id="mBranch"
                                type="text"
                                value={data.mBranch}
                                onChange={(e) =>
                                    setData("mBranch", e.target.value)
                                }
                                placeholder={t(
                                    "masterForm.placeholders.branch"
                                )}
                                required
                            />
                            <InputError message={errors && errors.mBranch} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="mYear">
                                {t("masterForm.labels.year")}
                            </InputLabel>
                            <Input
                                id="mYear"
                                type="text"
                                value={data.mYear}
                                onChange={(e) =>
                                    setData("mYear", e.target.value)
                                }
                                placeholder={t("masterForm.placeholders.year")}
                                required
                            />
                            <InputError message={errors && errors.mYear} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="mEstablishment">
                                {t("masterForm.labels.establishment")}
                            </InputLabel>
                            <Input
                                id="mEstablishment"
                                type="text"
                                value={data.mEstablishment}
                                onChange={(e) =>
                                    setData("mEstablishment", e.target.value)
                                }
                                placeholder={t(
                                    "masterForm.placeholders.establishment"
                                )}
                                required
                            />
                            <InputError
                                message={errors && errors.mEstablishment}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="semester7">
                                {t("masterForm.labels.semester7")}
                            </InputLabel>
                            <Input
                                id="semester7"
                                type="text"
                                value={data.semester7}
                                onChange={(e) =>
                                    setData("semester7", e.target.value)
                                }
                                placeholder={t(
                                    "masterForm.placeholders.semester7"
                                )}
                                required
                            />
                            <InputError message={errors && errors.semester7} />
                        </div>
                    </div>
                    <div className="w-full space-y-3">
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="semester8">
                                {t("masterForm.labels.semester8")}
                            </InputLabel>
                            <Input
                                id="semester8"
                                type="text"
                                value={data.semester8}
                                onChange={(e) =>
                                    setData("semester8", e.target.value)
                                }
                                placeholder={t(
                                    "masterForm.placeholders.semester8"
                                )}
                                required
                            />
                            <InputError message={errors && errors.semester8} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="semester9">
                                {t("masterForm.labels.semester9")}
                            </InputLabel>
                            <Input
                                id="semester9"
                                type="text"
                                value={data.semester9}
                                onChange={(e) =>
                                    setData("semester9", e.target.value)
                                }
                                placeholder={t(
                                    "masterForm.placeholders.semester9"
                                )}
                                required
                            />
                            <InputError message={errors && errors.semester9} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="semester10">
                                {t("masterForm.labels.semester10")}
                            </InputLabel>
                            <Input
                                id="semester10"
                                type="text"
                                value={data.semester10}
                                onChange={(e) =>
                                    setData("semester10", e.target.value)
                                }
                                placeholder={t(
                                    "masterForm.placeholders.semester10"
                                )}
                                required
                            />
                            <InputError message={errors && errors.semester10} />
                        </div>
                    </div>
                </div>
                <div>
                    <InputLabel htmlFor="masterDiploma">
                        {t("masterForm.labels.diploma")}
                    </InputLabel>
                    <FileInput
                        required={!completed}
                        type="file"
                        id="masterDiploma"
                        name="masterDiploma"
                        setData={setData}
                        errors={errors && errors.masterDiploma}
                    />
                </div>
            </div>
        </div>
    );
};

export default MasterForm;
