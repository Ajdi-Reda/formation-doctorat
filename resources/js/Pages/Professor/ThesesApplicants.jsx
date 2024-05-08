import React, { useState } from "react";
import ApplicantsTable from "@/Pages/Professor/ApplicantsTable.jsx";

const ThesesApplicants = ({ applicants }) => {
    const [openTableIndex, setOpenTableIndex] = useState(null);

    const handleTableToggle = (index) => {
        setOpenTableIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            <h1 className="text-xl my-6">Thesis applicants</h1>
            {applicants.map((thesis, idx) => (
                <div key={idx}>
                    <ApplicantsTable
                        thesisApplicants={thesis}
                        isOpen={openTableIndex === idx}
                        onToggle={() => handleTableToggle(idx)}
                    />
                </div>
            ))}
        </>
    );
};

export default ThesesApplicants;
