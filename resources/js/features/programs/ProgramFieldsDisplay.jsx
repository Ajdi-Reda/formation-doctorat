import React from "react";

const ProgramFieldsDisplay = ({ fields }) => {
    return (
        <>
            <div className="overflow-x-auto mt-16">
                <h2 className="text-xl mb-4">Program Fields</h2>
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                    Field Name
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                    Number of Theses
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {fields.map((field) => (
                                <tr
                                    key={field.name}
                                    className="cursor-pointer hover:bg-gray-100"
                                >
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {field.name}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {field.theses.length || 0}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ProgramFieldsDisplay;
