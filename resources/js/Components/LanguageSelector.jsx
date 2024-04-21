import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    useEffect(() => {
        // Check if the selected language is Arabic
        if (i18n.language === "ar") {
            document.documentElement.setAttribute("dir", "rtl");
        } else {
            document.documentElement.setAttribute("dir", "ltr");
        }
    }, [i18n.language]);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="flex justify-center mt-4">
            <button
                className="mx-2 px-4 py-2 border border-gray-700 rounded hover:bg-gray-700 hover:text-white"
                onClick={() => changeLanguage("en")}
            >
                English
            </button>
            <button
                className="mx-2 px-4 py-2 border border-gray-700 rounded hover:bg-gray-700 hover:text-white"
                onClick={() => changeLanguage("fr")}
            >
                French
            </button>
            <button
                className="mx-2 px-4 py-2 border border-gray-700 rounded hover:bg-gray-700 hover:text-white"
                onClick={() => changeLanguage("ar")}
            >
                Arabic
            </button>
        </div>
    );
};

export default LanguageSelector;
