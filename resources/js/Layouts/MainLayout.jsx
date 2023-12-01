import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import React from "react";

const MainLayout = ({ children }) => {
    return (
        <div>
            <NavBar
                navItems={[
                    {
                        name: "Explore Programs",
                        link: "/programs",
                        method: "get",
                    },
                    {
                        name: "Find Professors",
                        link: "/",
                        method: "get",
                    },
                    {
                        name: "Research Groups",
                        link: "/",
                        method: "get",
                    },
                ]}
            />
            <main className="container mx-auto">{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
