import React from "react";
import Sidebar from "@/Components/SideBar.jsx";
import Header from "@/Components/Header.jsx";
import { Toaster } from "react-hot-toast";

const AdminDashboardLayout = ({ children }) => {
    return (
        <div className="flex h-screen">
            <div>
                <Toaster />
            </div>
            <Sidebar />
            <div className="flex flex-col flex-grow">
                <Header />
                <div
                    className="p-4 flex-grow overflow-y-auto"
                    style={{ height: "calc(100vh - 64px)" }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardLayout;
