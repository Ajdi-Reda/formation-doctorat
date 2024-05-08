import React from "react";

const ApprovedApplicantsTable = ({
    thesisTitle,
    candidates,
    onRemoveCandidate,
    thesisId,
}) => {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-semibold mb-4">{thesisTitle}</h2>
            <div className="overflow-x-auto">
                <div className="-mx-4 sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                        >
                                            First Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Last Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Email
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Phone Number
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {candidates.length === 0 ? (
                                        <tr>
                                            <td
                                                colSpan="5"
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
                                                <td className="px-6 py-4">
                                                    <button>
                                                        {candidate.pivot
                                                            .accepted
                                                            ? "offer accepted"
                                                            : "pending"}
                                                    </button>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            onRemoveCandidate(
                                                                candidate.id,
                                                                thesisId
                                                            )
                                                        }
                                                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                                    >
                                                        Remove
                                                    </button>
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
        </div>
    );
};

export default ApprovedApplicantsTable;
