import React from "react";
import { useForm } from "@inertiajs/react";

const QualificationsForm = ({ children, handleIncrementStep }) => {
    const { data, setData, post, errors } = useForm({
        formName: "qualifications_form",
        yearOfBacGraduation: "",
        bacType: "",
        massarCode: "",
        bacOption: "",
        cityOfBacGraduation: "",
        highSchool: "",
        mention: "",
        bacAverage: "",
        nationalBacExamAverage: "",
        regionalExamAverage: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post("/form2");
        handleIncrementStep();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="py-6 mt-12 space-y-4">
                <div className="flex flex-col md:flex-row md:space-x-4 max-w-lg">
                    {/* First Column */}
                    <div className="md:w-1/2 space-y-2">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="yearOfBacGraduation">
                                Year of Bac Graduation
                            </label>
                            <input
                                required
                                type="text"
                                id="yearOfBacGraduation"
                                value={data.yearOfBacGraduation}
                                onChange={(e) =>
                                    setData(
                                        "yearOfBacGraduation",
                                        e.target.value
                                    )
                                }
                            />
                            {errors.yearOfBacGraduation && (
                                <p className="text-red-500 text-sm">
                                    {errors.yearOfBacGraduation}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="bacType">Bac Type</label>
                            <input
                                required
                                type="text"
                                id="bacType"
                                value={data.bacType}
                                onChange={(e) =>
                                    setData("bacType", e.target.value)
                                }
                            />
                            {errors.bacType && (
                                <p className="text-red-500 text-sm">
                                    {errors.bacType}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="massarCode">Massar Code</label>
                            <input
                                required
                                type="text"
                                id="massarCode"
                                value={data.massarCode}
                                onChange={(e) =>
                                    setData("massarCode", e.target.value)
                                }
                            />
                            {errors.massarCode && (
                                <p className="text-red-500 text-sm">
                                    {errors.massarCode}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="bacOption">Bac Option</label>
                            <input
                                required
                                type="text"
                                id="bacOption"
                                value={data.bacOption}
                                onChange={(e) =>
                                    setData("bacOption", e.target.value)
                                }
                            />
                            {errors.bacOption && (
                                <p className="text-red-500 text-sm">
                                    {errors.bacOption}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="nationalBacExamAverage">
                                National Bac Exam Average
                            </label>
                            <input
                                required
                                type="text"
                                id="nationalBacExamAverage"
                                value={data.nationalBacExamAverage}
                                onChange={(e) =>
                                    setData(
                                        "nationalBacExamAverage",
                                        e.target.value
                                    )
                                }
                            />
                            {errors.nationalBacExamAverage && (
                                <p className="text-red-500 text-sm">
                                    {errors.nationalBacExamAverage}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="md:w-1/2 space-y-2">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="cityOfBacGraduation">
                                City of Bac Graduation
                            </label>
                            <input
                                required
                                type="text"
                                id="cityOfBacGraduation"
                                value={data.cityOfBacGraduation}
                                onChange={(e) =>
                                    setData(
                                        "cityOfBacGraduation",
                                        e.target.value
                                    )
                                }
                            />
                            {errors.cityOfBacGraduation && (
                                <p className="text-red-500 text-sm">
                                    {errors.cityOfBacGraduation}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="highSchool">High School</label>
                            <input
                                required
                                type="text"
                                id="highSchool"
                                value={data.highSchool}
                                onChange={(e) =>
                                    setData("highSchool", e.target.value)
                                }
                            />
                            {errors.highSchool && (
                                <p className="text-red-500 text-sm">
                                    {errors.highSchool}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="mention">Mention</label>
                            <input
                                required
                                type="text"
                                id="mention"
                                value={data.mention}
                                onChange={(e) =>
                                    setData("mention", e.target.value)
                                }
                            />
                            {errors.mention && (
                                <p className="text-red-500 text-sm">
                                    {errors.mention}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="bacAverage">Bac Average</label>
                            <input
                                required
                                type="text"
                                id="bacAverage"
                                value={data.bacAverage}
                                onChange={(e) =>
                                    setData("bacAverage", e.target.value)
                                }
                            />
                            {errors.bacAverage && (
                                <p className="text-red-500 text-sm">
                                    {errors.bacAverage}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="regionalExamAverage">
                                Regional Exam Average
                            </label>
                            <input
                                required
                                type="text"
                                id="regionalExamAverage"
                                value={data.regionalExamAverage}
                                onChange={(e) =>
                                    setData(
                                        "regionalExamAverage",
                                        e.target.value
                                    )
                                }
                            />
                            {errors.regionalExamAverage && (
                                <p className="text-red-500 text-sm">
                                    {errors.regionalExamAverage}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {children}
            </div>
        </form>
    );
};

export default QualificationsForm;
