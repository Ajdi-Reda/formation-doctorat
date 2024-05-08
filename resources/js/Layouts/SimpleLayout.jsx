import LanguagePicker from "@/Components/LanguagePicker";
import React from "react";

const languages = [
    {
        id: 1,
        name: "English",
        notation: "en",
    },
    {
        id: 2,
        name: "French",
        notation: "fr",
    },
    {
        id: 3,
        name: "Arabic",
        notation: "ar",
    },
];
const SimpleLayout = ({ children }) => {
    return (
        <div className="flex min-h-full flex-col ">
            <header className="container mx-auto">
                <div className="shrink-0 bg-white">
                    <div className="text-right py-4 sm:px-6">
                        <LanguagePicker languages={languages} />
                    </div>
                </div>
            </header>
            <main className="container mx-auto">{children}</main>
        </div>
    );
};

export default SimpleLayout;
