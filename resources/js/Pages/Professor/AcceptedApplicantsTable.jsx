import React, { useEffect, useRef } from 'react';

const AcceptedApplicantsTable = ({ thesisTitle, candidates }) => {

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
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    );
}

export default AcceptedApplicantsTable;
