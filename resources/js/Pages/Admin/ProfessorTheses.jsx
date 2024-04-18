import React, { useEffect, useState } from "react";
import CandidatesTable from "./CandidateTable";
import JustLayout from "@/Layouts/JustLayout";

const ProfessorTheses = ({ theses, professorName }) => {
    const [openTableIndex, setOpenTableIndex] = useState(null);

    const handleTableToggle = (index) => {
        setOpenTableIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
        <>
            <JustLayout>
                <h1 className="text-2xl">{professorName}</h1>
                {theses.map((thesis, idx) => (
                    <div key={idx}>
                        <CandidatesTable
                            thesisApplicants={thesis}
                            isOpen={openTableIndex === idx}
                            onToggle={() => handleTableToggle(idx)}
                        />
                    </div>
                ))}
            </JustLayout>
        </>
    );
};

export default ProfessorTheses;
