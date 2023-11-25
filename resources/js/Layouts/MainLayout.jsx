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
        </div>
    );
};

export default MainLayout;
