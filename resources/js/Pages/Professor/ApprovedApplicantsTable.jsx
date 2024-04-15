import React, { useEffect, useRef } from 'react';

const ApprovedApplicantsTable = ({ thesisTitle, candidates, onRemoveCandidate, thesisId }) => {

    return (
        <div className="relative overflow-x-auto">
            <h2 className="text-lg font-semibold mb-4">{thesisTitle}</h2>
            <table id='approvedCandidates' className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">First Name</th>
                    <th scope="col" className="px-6 py-3">Last Name</th>
                    <th scope="col" className="px-6 py-3">Email</th>
                    <th scope="col" className="px-6 py-3">Phone Number</th>
                    <th scope="col" className="px-6 py-3">Status</th>
                    <th scope="col" className="px-6 py-3">Actions</th>
                </tr>
                </thead>
                <tbody>
                {candidates.length === 0 ? (
                    <tr>
                        <td colSpan="5" className="px-6 py-4 text-lg text-center">No Approved applicants</td>
                    </tr>
                ) : (
                    candidates.map(candidate => (
                        <tr key={candidate.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{candidate.firstName}</td>
                            <td className="px-6 py-4">{candidate.lastName}</td>
                            <td className="px-6 py-4">{candidate.email}</td>
                            <td className="px-6 py-4">{candidate.phone_number}</td>
                            <td className="px-6 py-4"><button>{candidate.pivot.accepted ? 'offer accepted' : 'pending'}</button></td>
                            <td className="px-6 py-4">
                                <button type="button" onClick={() => onRemoveCandidate(candidate.id, thesisId)}
                                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                >Remove</button>
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    );
}

export default ApprovedApplicantsTable;
