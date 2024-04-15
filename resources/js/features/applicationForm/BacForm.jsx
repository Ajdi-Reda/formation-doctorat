import React from "react";
import FileInput from "@/Components/FileInput.jsx";
import InputLabel from "@/Components/InputLabel.jsx";


const BacForm = ({ data, errors, setData, completed}) => {
    return (
        <>
            <div className="py-6 mt-6 space-y-4">
                <h1 className="text-2xl">Bac</h1>
                <div className="flex flex-col md:flex-row md:space-x-4 max-w-lg">
                    {/* First Column */}
                    <div className="md:w-1/2 space-y-2">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="bYear">Year of Bac Graduation</label>
                            <input
                                required
                                type="number"
                                id="bYear"
                                value={data.bYear}
                                onChange={(e) => setData("bYear", e.target.value)}
                            />
                            {errors.bYear && (
                                <p className="text-red-500 text-sm">{errors.bYear}</p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="bEstablishment">Establishment</label>
                            <input
                                required
                                type="text"
                                id="bEstablishment"
                                value={data.bEstablishment}
                                onChange={(e) => setData("bEstablishment", e.target.value)}
                            />
                            {errors.bEstablishment && (
                                <p className="text-red-500 text-sm">{errors.bEstablishment}</p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="massarCode">Massar Code</label>
                            <input
                                required
                                type="text"
                                id="massarCode"
                                value={data.massarCode}
                                onChange={(e) => setData("massarCode", e.target.value)}
                            />
                            {errors.massarCode && (
                                <p className="text-red-500 text-sm">{errors.massarCode}</p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="option">Bac Option</label>
                            <input
                                required
                                type="text"
                                id="option"
                                value={data.option}
                                onChange={(e) => setData("option", e.target.value)}
                            />
                            {errors.option && (
                                <p className="text-red-500 text-sm">{errors.option}</p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="nationalBacAverage">
                                National Bac Exam Average
                            </label>
                            <input
                                required
                                type="number"
                                id="nationalBacAverage"
                                value={data.nationalBacAverage}
                                onChange={(e) =>
                                    setData("nationalBacAverage", e.target.value)
                                }
                            />
                            {errors.nationalBacAverage && (
                                <p className="text-red-500 text-sm">
                                    {errors.nationalBacAverage}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="md:w-1/2 space-y-2">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="city">City of Bac Graduation</label>
                            <input
                                required
                                type="text"
                                id="city"
                                value={data.city}
                                onChange={(e) => setData("city", e.target.value)}
                            />
                            {errors.city && (
                                <p className="text-red-500 text-sm">{errors.city}</p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="mention">Mention</label>
                            <input
                                required
                                type="text"
                                id="mention"
                                value={data.mention}
                                onChange={(e) => setData("mention", e.target.value)}
                            />
                            {errors.mention && (
                                <p className="text-red-500 text-sm">{errors.mention}</p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="bacAverage">Bac Average</label>
                            <input
                                required
                                type="number"
                                id="bacAverage"
                                value={data.bacAverage}
                                onChange={(e) => setData("bacAverage", e.target.value)}
                            />
                            {errors.bacAverage && (
                                <p className="text-red-500 text-sm">{errors.bacAverage}</p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="regionalExamAverage">Regional Exam Average</label>
                            <input
                                required
                                type="number"
                                id="regionalExamAverage"
                                value={data.regionalExamAverage}
                                onChange={(e) =>
                                    setData("regionalExamAverage", e.target.value)
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
            </div>

            <div className="flex flex-col gap-2">
                <InputLabel htmlFor="bacDiploma">Upload Bac Diploma</InputLabel>
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
        </>
    );
};

export default BacForm;
