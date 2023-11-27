import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import React from "react";

const MainLayout = ({ children }) => {
    return (
        <div>
            <NavBar
                navItems={[
                    "Explore Programs",
                    "Find Professors",
                    "Research Groups",
                ]}
            />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
