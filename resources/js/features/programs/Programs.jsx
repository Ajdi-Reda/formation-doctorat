import React from "react";
import { Head } from "@inertiajs/react";
import ProgramCard from "@/features/programs/ProgramCard";

const Programs = ({ programs, formData }) => {
    return (
        <>
                    <div className="grid grid-cols-2 gap-1 md:grid-cols-4 md:gap-4 mt-12 ">
                        {programs.map((program) => (
                            <ProgramCard
                                key={program.id}
                                id={program.id}
                                title={program.title}
                                icon={program.icon}
                            />
                        ))}
                    </div>
                </>
            )
};

export default Programs;
