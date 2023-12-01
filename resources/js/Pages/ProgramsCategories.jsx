import React from "react";
import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import {
    FaBookOpen,
    FaMicroscope,
    FaBrain,
    FaAtom,
    FaFlask,
    FaChartLine,
    FaLaptopCode,
    FaLanguage,
    FaGlobe,
    FaHistory,
} from "react-icons/fa";
import CategoryCard from "@/features/programs/CategoryCard";

const ProgramsCategories = ({ programs }) => {
    const categories = [
        { id: 1, name: "Literature & Humanities", icon: <FaBookOpen /> },
        { id: 2, name: "Biomedical Sciences", icon: <FaMicroscope /> },
        { id: 3, name: "Cognitive Science", icon: <FaBrain /> },
        { id: 4, name: "Physics & Astrophysics", icon: <FaAtom /> },
        { id: 5, name: "Chemistry & Biochemistry", icon: <FaFlask /> },
        { id: 6, name: "Data Science & Analytics", icon: <FaChartLine /> },
        {
            id: 7,
            name: "Computer Science & Engineering",
            icon: <FaLaptopCode />,
        },
        {
            id: 8,
            name: "Linguistics & Language Studies",
            icon: <FaLanguage />,
        },
        {
            id: 9,
            name: "Global Studies & International Relations",
            icon: <FaGlobe />,
        },
        { id: 10, name: "History & Cultural Studies", icon: <FaHistory /> },
    ];

    return (
        <MainLayout>
            <>
                <h1 className="text-2xl md:text-4xl ">Explore Programs</h1>
                <div className="grid grid-cols-2 gap-1 md:grid-cols-4 md:gap-4 mt-12 ">
                    {categories.map((category) => (
                        <CategoryCard
                            id={category.id}
                            name={category.name}
                            icon={category.icon}
                        />
                    ))}
                </div>
            </>
        </MainLayout>
    );
};

export default ProgramsCategories;
