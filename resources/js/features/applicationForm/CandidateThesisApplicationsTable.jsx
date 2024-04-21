import React from "react";
import { useTranslation } from "react-i18next";

const CandidateThesisApplicationsTable = ({ theses }) => {
    const { t } = useTranslation("form");

    return (
        <div className="mt-6">
            <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
                {/* Table Header */}
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-2 px-4 text-center">
                            {t("candidateTableSummary.thesisIdentifier")}
                        </th>
                        <th className="py-2 px-4 text-center">
                            {t("candidateTableSummary.thesisTitle")}
                        </th>
                    </tr>
                </thead>
                {/* Table Body */}
                <tbody className="text-left">
                    {theses.map((thesis, idx) => (
                        <tr key={idx} className="border-b">
                            <td className="py-2 px-4 capitalize">
                                {thesis.id}
                            </td>
                            <td className="py-2 px-4 capitalize">
                                {thesis.title}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CandidateThesisApplicationsTable;
