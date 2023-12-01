import ContentSections from "@/Components/ContentSections";
import Hero from "@/Components/Hero";
import MainLayout from "@/Layouts/MainLayout";
import React from "react";

const LandingPage = () => {
    return (
        <MainLayout>
            <Hero />
            <ContentSections />
        </MainLayout>
    );
};

export default LandingPage;
