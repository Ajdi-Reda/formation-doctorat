import { useTranslation } from "react-i18next";
import { router } from "@inertiajs/react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const ApplicantsTable = ({ thesisApplicants, isOpen, onToggle }) => {
    const { t } = useTranslation("dashboard");
    const { pendingCandidates } = thesisApplicants;
    const thesisTitle = thesisApplicants.title;

    const [accordionOpen, setAccordionOpen] = useState(isOpen);

    const toggleAccordion = () => {
        setAccordionOpen((prevState) => !prevState);
        onToggle();
    };

    const getCandidateData = (id, candidate) => {
        const url = `/professor/dashboard/candidate/${id}`;
        router.get(url, {
            thesisId: thesisApplicants.id,
        });
    };

    return (
        <div className="relative mb-3">
            <h6 className="mb-0">
                <button
                    className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                    onClick={toggleAccordion}
                >
                    <span>{thesisTitle}</span>
                    <FaChevronDown
                        className={`absolute right-0 pt-1 text-base transition-transform ${
                            accordionOpen ? "rotate-180" : ""
                        }`}
                    />
                </button>
            </h6>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    accordionOpen ? "h-auto" : "h-0"
                }`}
            >
                {accordionOpen && (
                    <div className="flow-root">
                        {pendingCandidates.length > 0 ? (
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <div className="shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                    >
                                                        {t(
                                                            "applicantsTable.firstName"
                                                        )}
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                    >
                                                        {t(
                                                            "applicantsTable.lastName"
                                                        )}
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                    >
                                                        {t(
                                                            "applicantsTable.email"
                                                        )}
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                    >
                                                        {t(
                                                            "applicantsTable.phoneNumber"
                                                        )}
                                                    </th>
                                                </tr>
                                            </thead>
                                            {/* Table Body */}
                                            <tbody className="divide-y divide-gray-200 bg-white">
                                                {pendingCandidates.map(
                                                    (candidate, idx) => (
                                                        <tr
                                                            onClick={() =>
                                                                getCandidateData(
                                                                    candidate.id,
                                                                    candidate
                                                                )
                                                            }
                                                            key={idx}
                                                            className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                                                        >
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 cursor-pointer">
                                                                {
                                                                    candidate.firstName
                                                                }
                                                            </td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 cursor-pointer">
                                                                {
                                                                    candidate.lastName
                                                                }
                                                            </td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 cursor-pointer">
                                                                {
                                                                    candidate.email
                                                                }
                                                            </td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 cursor-pointer">
                                                                {
                                                                    candidate.phone_number
                                                                }
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p className="px-6 py-4 text-lg text-center">
                                {t("applicantsTable.noApplicants")}
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ApplicantsTable;
