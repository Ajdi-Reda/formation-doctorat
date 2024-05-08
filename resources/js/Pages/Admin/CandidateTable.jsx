import { router } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CandidatesTable = ({ thesisApplicants, isOpen, onToggle }) => {
    const thesisTitle = thesisApplicants.title;
    const thesisId = thesisApplicants.id;

    const [filter, setFilter] = useState("pending");
    const [candidateData, setCandidateData] = useState([]);

    useEffect(() => {
        switch (filter) {
            case "approved":
                setCandidateData(thesisApplicants.approvedCandidates);
                break;
            case "accepted":
                setCandidateData(thesisApplicants.acceptedCandidates);
                break;
            default:
                setCandidateData(thesisApplicants.pendingCandidates);
        }
    }, [filter, thesisApplicants]);

    const getCandidateData = (id) => {
        const url = `/admin/professor/candidate/${id}`;
        router.get(url, { thesisId });
    };

    return (
        <div className="relative mb-3 mt-4">
            <h6 className="mb-0">
                <button
                    className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                    onClick={onToggle}
                >
                    <span>{thesisTitle}</span>
                    <span
                        className={`absolute right-0 pt-1 text-base transition-transform ${
                            isOpen ? "rotate-180" : ""
                        }`}
                    >
                        <FaChevronUp />
                    </span>
                </button>
            </h6>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "h-auto" : "h-0"
                }`}
            >
                {isOpen && (
                    <>
                        <div className="flex justify-end mb-4">
                            <select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className="px-2 py-1 border border-gray-300 rounded-md w-28"
                            >
                                <option value="pending">Pending</option>
                                <option value="approved">Approved</option>
                                <option value="accepted">Accepted</option>
                            </select>
                        </div>
                        <div className="flow-root">
                            {candidateData.length > 0 ? (
                                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                        <div className=" shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th
                                                            scope="col"
                                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                        >
                                                            First name
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                        >
                                                            Last name
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
                                                            Phone number
                                                        </th>
                                                    </tr>
                                                </thead>
                                                {/* Table Body */}
                                                <tbody className="divide-y divide-gray-200 bg-white">
                                                    {candidateData.map(
                                                        (candidate, idx) => (
                                                            <tr
                                                                onClick={() =>
                                                                    getCandidateData(
                                                                        candidate.id
                                                                    )
                                                                }
                                                                key={idx}
                                                                className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 cursor-pointer"
                                                            >
                                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                                    {
                                                                        candidate.firstName
                                                                    }
                                                                </td>
                                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                                    {
                                                                        candidate.lastName
                                                                    }
                                                                </td>
                                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                                    {
                                                                        candidate.email
                                                                    }
                                                                </td>
                                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
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
                                <p className="px-6 py-4 text-md text-center">
                                    No applicants have applied to this thesis
                                </p>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CandidatesTable;
