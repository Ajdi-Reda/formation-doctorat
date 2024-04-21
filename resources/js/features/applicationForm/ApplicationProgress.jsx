import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";

export default function ApplicationProgress({ currentStep }) {
    const { t } = useTranslation("form"); // Load translations for the 'form' namespace

    const steps = [
        { id: "01", name: t("steps.01") },
        { id: "02", name: t("steps.02") },
        { id: "03", name: t("steps.03") },
        { id: "04", name: t("steps.04") },
        { id: "05", name: t("steps.05") },
    ];

    return (
        <nav aria-label="Progress" className="mt-8">
            <ol
                role="list"
                className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0"
            >
                {steps.map((step, stepIdx) => (
                    <li key={step.id} className="relative md:flex md:flex-1">
                        {stepIdx < currentStep ? (
                            <div className="group flex w-full items-center">
                                <span className="flex items-center px-6 py-4 text-sm font-medium">
                                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                                        <CheckIcon
                                            className="h-6 w-6 text-white"
                                            aria-hidden="true"
                                        />
                                    </span>
                                    <span className="mx-4 text-sm font-medium text-gray-900">
                                        {step.name}
                                    </span>
                                </span>
                            </div>
                        ) : (
                            <div className="group flex items-center">
                                <span className="flex items-center px-6 py-4 text-sm font-medium">
                                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                                        <span className="text-gray-500 group-hover:text-gray-900">
                                            {step.id}
                                        </span>
                                    </span>
                                    <span className="mx-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                                        {step.name}
                                    </span>
                                </span>
                            </div>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
