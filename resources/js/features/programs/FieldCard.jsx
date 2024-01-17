import { useForm } from "@inertiajs/react";
import React from "react";

const FieldCard = ({ field, handleIncrementStep }) => {
    const startDate = field.startDate.split("-");
    const endDate = field.endDate.split("-");
    const durationY = endDate[0] - startDate[0];
    const durationMo = endDate[1] - startDate[1];
    const { data, setData, post } = useForm({
        field: field.id,
        thesis: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        setData("field", field.id);
        post("/form1", data);
        handleIncrementStep();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="border p-4 mx-auto">
                <div className="flex justify-between">
                    <div>
                        <p className="text-xl font-semibold">
                            {field.fieldName}
                        </p>
                        <p>{field.description}</p>
                        <p className="text-lg font-semibold mt-4">
                            {field.universityName}
                        </p>
                        <p className="text-sm">{field.address}</p>
                    </div>
                    <div>
                        <select
                            required
                            onChange={(e) => setData("thesis", e.target.value)}
                        >
                            <option value="">Select a thesis</option>
                            {field.theses.map((thesis, idx) => {
                                return (
                                    <option value={thesis.title} key={idx}>
                                        {thesis.title}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="px-4 space-y-4">
                        <p>
                            {durationY !== undefined
                                ? (durationY > 0
                                      ? `${durationY} year${
                                            durationY > 1 ? "s" : ""
                                        }`
                                      : "") +
                                  (durationY > 0 && durationMo ? " and " : "") +
                                  (durationMo
                                      ? `${durationMo} month${
                                            durationMo > 1 ? "s" : ""
                                        }`
                                      : "")
                                : ""}
                        </p>
                        <button
                            disabled={!data.thesis}
                            type="submit"
                            className={`border py-2 px-4 ${
                                !data.thesis
                                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                    : "bg-indigo-600 text-white"
                            }`}
                        >
                            Apply
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default FieldCard;
