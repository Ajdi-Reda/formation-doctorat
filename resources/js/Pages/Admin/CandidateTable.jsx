import { router } from "@inertiajs/react";
import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const CandidatesTable = ({ thesisApplicants, isOpen, onToggle }) => {
    const { applicants } = thesisApplicants;
    const thesisTitle = thesisApplicants.title;
    const thesisId = thesisApplicants.id;

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
                <div className="relative overflow-x-auto transform duration-200">
                    {applicants.length > 0 ? (
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
                                {applicants.map((candidate, idx) => (
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
            )}
        </div>
    );
};

export default CandidatesTable;
