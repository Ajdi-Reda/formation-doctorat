import React from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import ProgramCard from "@/features/programs/ProgramCard";

const PhdPrograms = ({ programs }) => {
    return (
        <MainLayout>
            <>
                <h1 className="text-2xl md:text-4xl ">Explore Programs</h1>
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
        </MainLayout>
    );
};

export default PhdPrograms;
