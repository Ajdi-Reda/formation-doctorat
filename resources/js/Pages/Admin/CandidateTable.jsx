import { router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const CandidatesTable = ({ thesisApplicants, isOpen, onToggle }) => {
    const thesisTitle = thesisApplicants.title;
    const thesisId = thesisApplicants.id;

    const [filter, setFilter] = useState("pending");
    const [candidateData, setCandidateData] = useState([
        thesisApplicants.pendingCandidates,
    ]);

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
    }, [filter]);
    const getCandidateData = (id) => {
        const url = `/admin/professor/candidate/${id}`;
        router.get(url, { thesisId });
    };
    return (
        <div>
            <div
                className="flex justify-between cursor-pointer items-center my-4"
                onClick={onToggle}
            >
                <h2 className="text-lg mt-12 mb-4">{thesisTitle}</h2>
                <span
                    className={`${
                        isOpen ? "transform rotate-180" : ""
                    } duration-100`}
                >
                    <FaChevronUp />
                </span>
            </div>
            {isOpen && (
                <div>
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
                    <div className="relative overflow-x-auto transform duration-200">
                        {candidateData.length > 0 ? (
                            <table className="w-full text-sm text-left rtl:text-right">
                                {/* Table Header */}
                                <thead className="text-xsuppercase bg-gray-50 ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            First name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Last name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Email
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Phone number
                                        </th>
                                    </tr>
                                </thead>
                                {/* Table Body */}
                                <tbody>
                                    {candidateData.map((candidate, idx) => (
                                        <tr
                                            onClick={() =>
                                                getCandidateData(candidate.id)
                                            }
                                            key={idx}
                                            className="bg-white border-b cursor-pointer"
                                        >
                                            <td className="px-6 py-4">
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
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p className="px-6 py-4 text-lg text-center">
                                No applicants have applied to this thesis
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CandidatesTable;
