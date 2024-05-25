import LanguagePicker from "@/Components/LanguagePicker";
import React from "react";

const SimpleLayout = ({ children }) => {
    return (
        <div className="flex min-h-full flex-col ">
            <header className="container mx-auto">
                <div className="shrink-0 bg-white">
                    <div className="text-right py-4 sm:px-6">
                        <LanguagePicker />
                    </div>
                </div>
            </header>
            <main className="container mx-auto">{children}</main>
        </div>
    );
};

export default SimpleLayout;
