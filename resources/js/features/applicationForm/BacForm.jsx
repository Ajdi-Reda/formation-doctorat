import React from "react";
import Input from "@/Components/Input.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import InputError from "@/Components/InputError.jsx";
import FileInput from "@/Components/FileInput.jsx";
import { useTranslation } from "react-i18next";

const BacForm = ({ data, errors, setData, completed }) => {
    const { t } = useTranslation("form");

    return (
        <div>
            <div className="py-6 mt-12 space-y-4">
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 mx-auto md:gap-4">
                    <div className="w-full space-y-3">
                        <div className="flex flex-col gap-2 md:flex-row ">
                            <div className="flex flex-col gap-2 md:w-full">
                                <InputLabel htmlFor="bYear">
                                    {t("bacForm.labels.bYear")}
                                </InputLabel>
                                <Input
                                    id="bYear"
                                    type="number"
                                    placeholder={t(
                                        "bacForm.placeholders.bYear"
                                    )}
                                    value={data["bYear"]}
                                    onChange={(e) =>
                                        setData("bYear", e.target.value)
                                    }
                                    required
                                />
                                <InputError
                                    message={errors && errors["bYear"]}
                                />
                            </div>
                            <div className="flex flex-col gap-2 md:w-full">
                                <InputLabel htmlFor="bEstablishment">
                                    {t("bacForm.labels.bEstablishment")}
                                </InputLabel>
                                <Input
                                    id="bEstablishment"
                                    pattern="[a-zA-Z]*"
                                    type="text"
                                    placeholder={t(
                                        "bacForm.placeholders.bEstablishment"
                                    )}
                                    value={data["bEstablishment"]}
                                    onChange={(e) =>
                                        setData(
                                            "bEstablishment",
                                            e.target.value
                                        )
                                    }
                                    required
                                />
                                <InputError
                                    message={errors && errors["bEstablishment"]}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="massarCode">
                                {t("bacForm.labels.massarCode")}
                            </InputLabel>
                            <Input
                                id="massarCode"
                                type="text"
                                placeholder={t(
                                    "bacForm.placeholders.massarCode"
                                )}
                                value={data["massarCode"]}
                                onChange={(e) =>
                                    setData("massarCode", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors && errors["massarCode"]}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="option">
                                {t("bacForm.labels.option")}
                            </InputLabel>
                            <Input
                                id="option"
                                type="text"
                                pattern="[a-zA-Z]*"
                                placeholder={t("bacForm.placeholders.option")}
                                value={data["option"]}
                                onChange={(e) =>
                                    setData("option", e.target.value)
                                }
                                required
                            />
                            <InputError message={errors && errors["option"]} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="nationalBacAverage">
                                {t("bacForm.labels.nationalBacAverage")}
                            </InputLabel>
                            <Input
                                id="nationalBacAverage"
                                type="number"
                                placeholder={t(
                                    "bacForm.placeholders.nationalBacAverage"
                                )}
                                value={data["nationalBacAverage"]}
                                onChange={(e) =>
                                    setData(
                                        "nationalBacAverage",
                                        e.target.value
                                    )
                                }
                                required
                            />
                            <InputError
                                message={errors && errors["nationalBacAverage"]}
                            />
                        </div>
                    </div>
                    <div className="w-full space-y-3">
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="city">
                                {t("bacForm.labels.city")}
                            </InputLabel>
                            <Input
                                id="city"
                                pattern="[a-zA-Z]*"
                                type="text"
                                placeholder={t("bacForm.placeholders.city")}
                                value={data["city"]}
                                onChange={(e) =>
                                    setData("city", e.target.value)
                                }
                                required
                            />
                            <InputError message={errors && errors["city"]} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="mention">
                                {t("bacForm.labels.mention")}
                            </InputLabel>
                            <Input
                                id="mention"
                                type="text"
                                placeholder={t("bacForm.placeholders.mention")}
                                value={data["mention"]}
                                onChange={(e) =>
                                    setData("mention", e.target.value)
                                }
                                required
                            />
                            <InputError message={errors && errors["mention"]} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="bacAverage">
                                {t("bacForm.labels.bacAverage")}
                            </InputLabel>
                            <Input
                                id="bacAverage"
                                type="number"
                                placeholder={t(
                                    "bacForm.placeholders.bacAverage"
                                )}
                                value={data["bacAverage"]}
                                onChange={(e) =>
                                    setData("bacAverage", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors && errors["bacAverage"]}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <InputLabel htmlFor="regionalExamAverage">
                                {t("bacForm.labels.regionalExamAverage")}
                            </InputLabel>
                            <Input
                                id="regionalExamAverage"
                                type="number"
                                placeholder={t(
                                    "bacForm.placeholders.regionalExamAverage"
                                )}
                                value={data["regionalExamAverage"]}
                                onChange={(e) =>
                                    setData(
                                        "regionalExamAverage",
                                        e.target.value
                                    )
                                }
                                required
                            />
                            <InputError
                                message={
                                    errors && errors["regionalExamAverage"]
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <InputLabel htmlFor="bacDiploma">
                    {t("bacForm.labels.bacDiploma")}
                </InputLabel>
                <FileInput
                    required={!completed}
                    type="file"
                    id="bacDiploma"
                    name="bacDiploma"
                    accept="application/pdf"
                    setData={setData}
                    errors={errors.bacDiploma}
                />
            </div>
        </div>
    );
};

export default BacForm;
