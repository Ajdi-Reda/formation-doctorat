import React from "react";

const AcceptedApplicantsTable = ({ thesisTitle, candidates }) => {
    return (
        <div className="relative overflow-x-auto">
            <h2 className="text-lg font-semibold mb-4">{thesisTitle}</h2>
            <div className="-mx-4 sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                                    >
                                        First Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Last Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Phone Number
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {candidates.length === 0 ? (
                                    <tr>
                                        <td
                                            colSpan="4"
                                            className="px-6 py-4 text-lg text-center"
                                        >
                                            No Approved applicants
                                        </td>
                                    </tr>
                                ) : (
                                    candidates.map((candidate) => (
                                        <tr
                                            key={candidate.id}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                        >
                                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {candidate.firstName}
                                            </td>
                                            <td className="px-6 py-4">
                                                {candidate.lastName}
                                            </td>
                                            <td className="px-6 py-4">
                                                {candidate.email}
                                            </td>
                                            <td className="px-6 py-4">
                                                {candidate.phone_number}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcceptedApplicantsTable;
