import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import ProgramCard from "@/features/programs/ProgramCard";
import SimpleLayout from "@/Layouts/SimpleLayout";

const PhdPrograms = ({ programs, auth }) => {
    return (
        <>
            {auth.user ? (
                <>
                    <SimpleLayout>
                        <div className=" container mx-auto grid grid-cols-2 gap-1 md:grid-cols-4 md:gap-4 mt-12 ">
                            {programs.map((program) => (
                                <ProgramCard
                                    key={program.id}
                                    id={program.id}
                                    title={program.title}
                                    icon={program.icon}
                                />
                            ))}
                        </div>
                    </SimpleLayout>
                </>
            ) : (
                <MainLayout>
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
                </MainLayout>
            )}
        </>
    );
};

export default PhdPrograms;
