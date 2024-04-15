import { router } from '@inertiajs/react';
import React, { useState } from 'react';
import { FaChevronUp } from "react-icons/fa";

const ApplicantsTable = ({ thesisApplicants, isOpen, onToggle }) => {
    const { pendingCandidates } = thesisApplicants;
    const thesisTitle = thesisApplicants.title;
    const thesisId = thesisApplicants.id;
    console.log(thesisId);

    const getCandidateData = (id) => {
        const url = `/professor/dashboard/candidate/${id}`
         router.get(url, {thesisId});
     }
    return (
        <div>
            <div className="flex justify-between cursor-pointer items-center my-4" onClick={onToggle}>
                <h2 className="text-lg mt-12 mb-4">
                    {thesisTitle}
                </h2>
                <span className={`${isOpen ? 'transform rotate-180' : ''} duration-100`}>
                    <FaChevronUp/>
                </span>
            </div>
            {isOpen && (
                <div className="relative overflow-x-auto transform duration-200">
                    {pendingCandidates.length > 0 ? (
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            {/* Table Header */}
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">First name</th>
                                    <th scope="col" className="px-6 py-3">Last name</th>
                                    <th scope="col" className="px-6 py-3">Email</th>
                                    <th scope="col" className="px-6 py-3">Phone number</th>
                                </tr>
                            </thead>
                            {/* Table Body */}
                            <tbody>
                                {pendingCandidates.map((candidate, idx) => (
                                    <tr onClick={() => getCandidateData(candidate.id)} key={idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
                                        <td className="px-6 py-4">{candidate.firstName}</td>
                                        <td className="px-6 py-4">{candidate.lastName}</td>
                                        <td className="px-6 py-4">{candidate.email}</td>
                                        <td className="px-6 py-4">{candidate.phone_number}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="px-6 py-4 text-lg text-center">No applicants have applied to this thesis</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default ApplicantsTable;
