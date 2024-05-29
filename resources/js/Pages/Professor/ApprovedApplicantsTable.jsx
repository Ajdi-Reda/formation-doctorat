import React from "react";
import { useTranslation } from "react-i18next";

const ApprovedApplicantsTable = ({
    thesisTitle,
    candidates,
    onRemoveCandidate,
    thesisId,
}) => {
    const { t } = useTranslation("dashboard");

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
                                            {t(
                                                "approvedApplicantsTable.firstName"
                                            )}
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            {t(
                                                "approvedApplicantsTable.lastName"
                                            )}
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            {t("approvedApplicantsTable.email")}
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            {t(
                                                "approvedApplicantsTable.phoneNumber"
                                            )}
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            {t(
                                                "approvedApplicantsTable.status"
                                            )}
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        >
                                            {t(
                                                "approvedApplicantsTable.actions"
                                            )}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {candidates.length === 0 ? (
                                        <tr>
                                            <td
                                                colSpan="6"
                                                className="px-6 py-4 text-lg text-center"
                                            >
                                                {t(
                                                    "approvedApplicantsTable.noApprovedApplicants"
                                                )}
                                            </td>
                                        </tr>
                                    ) : (
                                        candidates.map((candidate) => (
                                            <tr key={candidate.id}>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {candidate.firstName}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {candidate.lastName}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {candidate.email}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {candidate.phone_number}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    <button>
                                                        {candidate.pivot
                                                            .accepted
                                                            ? t(
                                                                  "approvedApplicantsTable.offerAccepted"
                                                              )
                                                            : t(
                                                                  "approvedApplicantsTable.pending"
                                                              )}
                                                    </button>
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
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
                                                        {t(
                                                            "approvedApplicantsTable.remove"
                                                        )}
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
