import React, { useEffect, useState } from "react";

const ThesisRow = ({ thesis, duration, setData, data }) => {
    const [remove, setRemove] = useState(false);

    useEffect(() => {
        const res = data.theses.find((t) => t === thesis.id);
        if (res) setRemove(true);
    }, [data, thesis]);

    const handleButtonClick = (event) => {
        event.preventDefault();
        setRemove(!remove);
        if (!remove) {
            setData("theses", [...data.theses, thesis.id]);
        } else {
            setData(
                "theses",
                data.theses.filter((thesisId) => thesisId !== thesis.id)
            );
        }
    };

    return (
        <tr className="bg-white border-b">
            <td
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                scope="row"
            >
                {thesis.title}
            </td>
            <td className="px-6 py-4">{duration}</td>
            <td className="px-6 py-4">
                <button
                    className="border py-1 px-2 text-md bg-indigo-600 text-white rounded-sm w-20"
                    onClick={handleButtonClick}
                >
                    {remove ? "Remove" : "Select"}
                </button>
            </td>
        </tr>
    );
};

export default ThesisRow;
