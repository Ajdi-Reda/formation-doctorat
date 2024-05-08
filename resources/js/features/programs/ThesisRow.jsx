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
        <tr className="bg-white divide-y divide-gray-200">
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                {thesis.title}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                {duration}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                <button
                    className="text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded-md"
                    onClick={handleButtonClick}
                >
                    {remove ? "selected" : "Select"}
                </button>
            </td>
        </tr>
    );
};

export default ThesisRow;
