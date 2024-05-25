import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

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

export default function LanguagePicker() {
    const { i18n } = useTranslation(); // Destructure i18n from useTranslation
    const [selectedLanguage, setSelectedLanguage] = useState(() => {
        const storedLanguage = localStorage.getItem("selectedLanguage");
        return storedLanguage ? JSON.parse(storedLanguage) : languages[0];
    });

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
        i18n.changeLanguage(language.notation); // Use i18n to change language
        localStorage.setItem("selectedLanguage", JSON.stringify(language));
    };

    useEffect(() => {
        // Check if the selected language is Arabic
        if (i18n.language === "ar") {
            document.documentElement.setAttribute("dir", "rtl");
        } else {
            document.documentElement.setAttribute("dir", "ltr");
        }
    }, [i18n.language]);

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {selectedLanguage.name}
                    <ChevronDownIcon
                        className="-mr-1 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {languages.map((language) => (
                            <Menu.Item key={language.id}>
                                {({ active }) => (
                                    <button
                                        onClick={() =>
                                            handleLanguageSelect(language)
                                        }
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                            "block w-full px-4 py-2 text-left text-sm"
                                        )}
                                    >
                                        {language.name}
                                    </button>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
